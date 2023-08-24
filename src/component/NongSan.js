import {Block, BlockTitle, Button, List, ListInput} from "konsta/react";
import * as dayjs from 'dayjs'
import React, {useEffect, useState} from "react";
import {getAuth} from "firebase/auth";
import firebaseApp from "@/firebase/config";

import {doc, getFirestore, setDoc, getDoc} from "firebase/firestore";
import {useRouter} from "next/router";
const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp);
const NongSan =()=>{
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    console.log(now)
    const [nameNS, setNameNS] = useState("")
    const [cssx, setCssx] = useState("")
    const [donggoi, setDonggoi] = useState("")
    const [hsd, setHsd] = useState("")
    const [imageNS, setImageNS] = useState(null)
    const [data, setData] = useState()
    const currentUser = auth.currentUser?.email
    useEffect(()=> {
        fetchData()
    },[])
    const fetchData = async () => {
        const docRef = doc(db, 'khoaicth', 'nongsan');

        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            const d = docSnapshot.data()?.data?.filter(i=>i.user===currentUser);
            console.log('d: ',d)
            if (d && d.length>0) {
                setNameNS(d[0].nameNS)
                setDonggoi(d[0].donggoi)
                setCssx(d[0].cssx)
                setHsd(d[0].hsd)
                setImageNS(d[0].imageNS)
            }
        } else {
            console.log('Document not found!');
        }
    }
    const handleSave = () => {
        setDoc(doc(db, "khoaicth", 'nongsan'), {
            data: [
                {
                    idNS: (Math.random() + 1).toString(36).substring(7),
                    user: auth.currentUser.email,
                    nameNS, cssx, donggoi, hsd, imageNS, dateUpdate: now
                }]})
    }

    return (
        <>
            <BlockTitle>Chi tiết nông sản</BlockTitle>
            <List strongIos insetIos>
                <ListInput
                    outline
                    label="Tên nông sản"
                    type="text"
                    placeholder="Nhập tên nông sản"
                    media={<i className="w-5 h-5 fa-solid fa-seedling"></i>}
                    value={nameNS}
                    onChange={e => setNameNS(e.target.value)}
                />

                <ListInput
                    outline
                    label="Cơ sở sản xuất"
                    type="text"
                    placeholder="Nhập tên cơ sở sản xuất"
                    media={<i className="w-5 h-5 fa-solid fa-house-flag"></i>}
                    value={cssx}
                    onChange={e => setCssx(e.target.value)}
                />
                <ListInput
                    outline
                    label="Quy cách đóng gói"
                    type="text"
                    placeholder="Nhập tên nông sản"
                    media={<i className="w-5 h-5 fa-solid fa-box"></i>}
                    value={donggoi}
                    onChange={e => setDonggoi(e.target.value)}
                />
                <ListInput
                    outline
                    label="Thời hạn sử dụng"
                    type="text"
                    placeholder="Nhập tên nông sản"
                    media={<i className="w-5 h-5 fa-solid fa-calendar-xmark"></i>}
                    value={hsd}
                    onChange={e => setHsd(e.target.value)}
                />


                <ListInput
                    outline
                    id="customFile"
                    label="Hình ảnh"
                    type="file"
                    placeholder="Chọn hình ảnh"
                    media={<i className="w-5 h-5 fa-solid fa-image"></i>}
                    value={imageNS}
                    onChange={e => setImageNS(e.target.value)}
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
export default NongSan;