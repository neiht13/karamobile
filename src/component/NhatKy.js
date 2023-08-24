import {Block, BlockTitle, Button, List, ListInput} from "konsta/react";
import * as dayjs from 'dayjs'
import React, {useEffect, useState} from "react";
import {getAuth} from "firebase/auth";
import firebaseApp from "@/firebase/config";
import {doc, getFirestore, setDoc, getDoc} from "firebase/firestore";
import {useRouter} from "next/router";
import { getStorage, ref , uploadBytes } from "firebase/storage";

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp);

const NhatKy =()=>{
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    const [nameCV, setNameCV] = useState("")
    const [typeCV, setTypeCV] = useState("")
    const [detailCV, setDetailCV] = useState("")
    const [muavu, setMuavu] = useState("2023")
    const [vattu, setVattu] = useState("")
    const [dateCV, setDateCV] = useState(now)
    const [imageCV, setImageCV] = useState(null)
    const [data, setData] = useState([])
    const router = useRouter();

    const uploadImage =()=>{

        const storage = getStorage(firebaseApp);

        const storageRef = ref(storage);
        const imagesRef = ref(storage, 'images');

        uploadBytes(storageRef, imageCV).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }
    function handleImageChange(e) {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const imageBlob = new Blob([event.target.result], { type: selectedImage.type });
                // Giờ bạn có thể sử dụng imageBlob để thực hiện các thao tác khác
                setImageCV(imageBlob)
            };

            reader.readAsArrayBuffer(selectedImage);
        }
    }
    console.log(now)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
        const docRef = doc(db, 'khoaicth', 'nhatky');

        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            setData(docSnapshot.data()?.data);
            console.log('data: ',docSnapshot.data()?.data)
        } else {
            console.log('Document not found!');
        }
    }
    const handleSave = () => {
      // alert(JSON.stringify({ user: auth.currentUser.email, nameCV,typeCV,detailCV,muavu,vattu,dateCV,imageCV, dateUpdate: now}))
            setDoc(doc(db, "khoaicth", 'nhatky'), {
                data: [
                    ...data,
                    {
            idNK: (Math.random() + 1).toString(36).substring(7),
            user: auth.currentUser.email, nameCV, typeCV, detailCV, muavu, vattu, dateCV, imageCV, dateUpdate: now
        }]}
            ).then(r  => router.reload()
            );
    }
    return (
        <>
            <BlockTitle>Nhật ký canh tác</BlockTitle>
            <List strongIos insetIos>
                {/*<ListInput*/}
                {/*    outline*/}
                {/*    label="Tên công việc"*/}
                {/*    type="text"*/}
                {/*    placeholder="Nhập tên công việc"*/}
                {/*    media={<i className="w-5 h-5 fa-solid fa-file-signature"></i>}*/}
                {/*    value={nameCV}*/}
                {/*    onChange={e=>setNameCV(e.target.value)}*/}
                {/*/>*/}
                <ListInput
                    outline
                    label="Tên công việc"
                    type="select"
                    dropdown
                    defaultValue="chung"
                    placeholder="Chọn loại công việc ..."
                    media={<i className="w-5 h-5 fa-solid fa-object-ungroup"></i>}

                    value={nameCV}
                    onChange={e=> setNameCV(e.target.value)}
                >
                    <option value='Công việc chung'>&nbsp;Công việc chung</option>
                    <option value='Thăm ruộng'>&nbsp;Thăm ruộng</option>
                    <option value='Tưới nước'>&nbsp;Tưới nước</option>
                    <option value='Bón phân'>&nbsp;Bón phân</option>
                    <option value='Sử dụng thuốc BVTV'>&nbsp;Sử dụng thuốc BVTV</option>
                    <option value='Xới đất'>&nbsp;Xới đất</option>
                    <option value='Thu Hoạch'>&nbsp;Thu Hoạch</option>
                    <option value='Lên Liếp'>&nbsp;Lên liếp</option>
                    <option value='Trồng khoai'>&nbsp;Trồng khoai</option>
                    <option value='Công việc khác'>&nbsp;Công việc khác</option>
                </ListInput>


                <ListInput
                    outline
                    label="Mô tả công việc"
                    type="textarea"
                    placeholder="Chi tiết công việc"
                    media={<i className="w-5 h-5 fa-solid fa-pen-to-square"></i>}
                    inputClassName="h-20 resize-none"

                    value={detailCV}
                    onChange={e=>setDetailCV(e.target.value)}
                />

                <ListInput
                    outline
                    label="Ngày thực hiện"
                    type="date"
                    defaultValue={now}
                    placeholder="Please choose..."
                    media={<i className="w-5 h-5 fa-regular fa-calendar-check"></i>}

                    value={dateCV}
                    onChange={e=>setDateCV(e.target.value)}
                />
                {/*<ListInput*/}
                {/*    outline*/}
                {/*    label="Vật tư BVTV"*/}
                {/*    type="select"*/}
                {/*    dropdown*/}
                {/*    defaultValue="2023"*/}
                {/*    placeholder="Chọn mùa vụ ..."*/}
                {/*    media={<i className="w-5 h-5 fa-solid fa-bottle-water"></i>}*/}

                {/*    value={vattu}*/}
                {/*    onChange={e=>setVattu(e.target.value)}*/}
                {/*>*/}
                {/*    <option value='2022'>&nbsp;2022</option>*/}
                {/*    <option value='2023'>&nbsp;2023</option>*/}
                {/*    <option value='2024'>&nbsp;2024</option>*/}

                {/*</ListInput>*/}
                <ListInput
                    outline
                    label="Mùa vụ"
                    type="select"
                    dropdown
                    defaultValue="2023"
                    placeholder="Chọn mùa vụ ..."
                    media={<i className="w-5 h-5 fa-brands fa-pagelines"></i>}

                    value={muavu}
                    onChange={e=>setMuavu(e.target.value)}
                >
                    <option value='2022'>&nbsp;2022</option>
                    <option value='2023'>&nbsp;2023</option>
                    <option value='2024'>&nbsp;2024</option>

                </ListInput>
                <ListInput
                    outline
                    id="customFile"
                    label="Hình ảnh"
                    type="file"
                    placeholder="Chọn hình ảnh"
                    media={<i className="w-5 h-5 fa-solid fa-image"></i>}

                    value={imageCV}
                    onChange={e=>setImageCV(e.target.value)}
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
export default NhatKy;