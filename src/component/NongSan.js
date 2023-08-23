import {Block, BlockTitle, Button, List, ListInput} from "konsta/react";
import * as dayjs from 'dayjs'
import React, {useState} from "react";
import {getAuth} from "firebase/auth";
import firebaseApp from "@/firebase/config";

const auth = getAuth(firebaseApp);

const NongSan =()=>{
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    console.log(now)
    const [nameNS, setNameNS] = useState("")
    const [cssx, setCssx] = useState("")
    const [donggoi, setDonggoi] = useState("")
    const [hsd, setHsd] = useState("")
    const [imageNS, setImageNS] = useState(null)

    const handleSave = () => {
        alert(JSON.stringify({ user: auth.currentUser.email, dateUpdate: now,
            nameNS, cssx, donggoi, hsd, imageNS
        }))
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
                    media={<i className="fa-solid fa-seedling"></i>}
                    value={nameNS}
                    onChange={e => setNameNS(e.target.value)}
                />

                <ListInput
                    outline
                    label="Cơ sở sản xuất"
                    type="text"
                    placeholder="Nhập tên cơ sở sản xuất"
                    media={<i className="fa-solid fa-house-flag"></i>}
                    value={cssx}
                    onChange={e => setCssx(e.target.value)}
                />
                <ListInput
                    outline
                    label="Quy cách đóng gói"
                    type="text"
                    placeholder="Nhập tên nông sản"
                    media={<i class="fa-solid fa-box"></i>}
                    value={donggoi}
                    onChange={e => setDonggoi(e.target.value)}
                />
                <ListInput
                    outline
                    label="Thời hạn sử dụng"
                    type="text"
                    placeholder="Nhập tên nông sản"
                    media={<i className="fa-solid fa-calendar-xmark"></i>}
                    value={hsd}
                    onChange={e => setHsd(e.target.value)}
                />


                <ListInput
                    outline
                    id="customFile"
                    label="Hình ảnh"
                    type="file"
                    placeholder="Chọn hình ảnh"
                    media={<i className="fa-solid fa-image"></i>}
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