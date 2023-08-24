import {Block, BlockTitle, Button, List, ListInput} from "konsta/react";
import * as dayjs from 'dayjs'
import React, {useEffect, useState} from "react";
import {getAuth} from "firebase/auth";
import firebaseApp from "@/firebase/config";
import {doc, getFirestore, setDoc, getDoc} from "firebase/firestore";
import {useRouter} from "next/router";
import {log} from "next/dist/server/typescript/utils";
const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp);
const ChungNhan =()=>{
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    console.log(now)

    const [nameCS, setNameCS] = useState("")
    const [diaChi, setDiachi] = useState("")
    const [dienTich, setDienTich] = useState("")
    const [nameCN, setNameCN] = useState("")
    const [typeCN, setTypeCN] = useState("")
    const [dateCN, setDateCN] = useState(now)
    const [imageCN, setImageCN] = useState(null)
    const currentUser = auth.currentUser?.email

    useEffect(()=> {
        fetchData()
    },[])
    const fetchData = async () => {
        const docRef = doc(db, 'khoaicth', 'chungnhan');

        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            const d = docSnapshot.data()?.data?.filter(i=>i.user===currentUser);
            if (d && d.length>0) {
                setNameCN(d[0].nameCN)
                setNameCS(d[0].nameCS)
                setTypeCN(d[0].typeCN)
                setDiachi(d[0].diaChi)
                setDienTich(d[0].dienTich)
                setDateCN(d[0].dateCN)
                setImageCN(d[0].imageCN)
            }
        } else {
            console.log('Document not found!');
        }
    }

    const handleSave = () => {
        // alert(JSON.stringify({ user: auth.currentUser.email, nameCV,typeCV,detailCV,muavu,vattu,dateCV,imageCV, dateUpdate: now}))
        setDoc(doc(db, "khoaicth", 'chungnhan'), {
            data: [
                {
                    idNK: (Math.random() + 1).toString(36).substring(7),
                    user: auth.currentUser.email,
                    nameCN, nameCS, typeCN, dateCN, imageCN, diaChi, dienTich, dateUpdate: now
                }]}
        ).then(r  => console.log()
        );
    }
    return (
        <>
            <BlockTitle>Chi tiết nông sản</BlockTitle>
            <List strongIos insetIos>

                <ListInput
                    outline
                    label="Tên cơ sở sản xuất"
                    type="text"
                    placeholder="Nhập tên cơ sở sản xuất"
                    media={<i className="w-5 h-5 fa-solid fa-house-flag"></i>}
                    value={nameCS}
                    onChange={e=>setNameCS(e.target.value)}
                />

                <ListInput
                    outline
                    label="Địa chỉ"
                    type="text"
                    placeholder="Nhập địa chỉ cụ thể"
                    media={<i className="w-5 h-5 fa-solid fa-location-dot"></i>}
                    value={diaChi}
                    onChange={e=>setDiachi(e.target.value)}
                />
                <ListInput
                    outline
                    label="Diện tích"
                    type="text"
                    placeholder="Nhập diện tích canh tác"
                    media={<i className="w-5 h-5 fa-regular fa-square-plus"></i>}
                    value={dienTich}
                    onChange={e=>setDienTich(e.target.value)}
                />

                <ListInput
                    outline
                    label="Tên chứng nhận"
                    type="text"
                    placeholder="Nhập tên chứng nhận"
                    media={<i className="w-5 h-5 fa-solid fa-stamp"></i>}

                    value={nameCN}
                    onChange={e=>setNameCN(e.target.value)}
                />

                <ListInput
                    outline
                    label="Loại chứng nhận"
                    type="select"
                    dropdown
                    defaultValue=""
                    placeholder="Chọn loại chứng nhận ..."
                    media={<i className="w-5 h-5 fa-solid fa-certificate"></i>}

                    value={typeCN}
                    onChange={e=>setTypeCN(e.target.value)}
                >
                    <option value=''>&nbsp;--Chọn loại chứng nhận--</option>
                    <option value='VietGAP'>&nbsp;VietGAP</option>
                    <option value='GlobalGAP'>&nbsp;GlobalGAP</option>
                    <option value='USDA Organic'>&nbsp;USDA Organic</option>
                    <option value='EU Organic'>&nbsp;EU Organic</option>
                </ListInput>
                <ListInput
                    outline
                    label="Ngày hiệu lực"
                    type="date"
                    placeholder="Please choose..."
                    media={<i className="w-5 h-5 fa-solid fa-calendar"></i>}
                    value={dateCN}
                    onChange={e=>setDateCN(e.target.value)}
                />

                <ListInput
                    outline
                    id="customFile"
                    label="Hình ảnh"
                    type="file"
                    placeholder="Chọn hình ảnh"
                    media={<i className="w-5 h-5 fa-solid fa-image"></i>}

                    value={imageCN}
                    onChange={e=>setImageCN(e.target.value)}
                />

            </List>

            <Block strong className="flex space-x-4">
                <Button onClick={handleSave}>Lưu</Button>
            </Block>
            <Block strong className="flex space-x-4">
            </Block>
        </>
    )
}
export default ChungNhan;