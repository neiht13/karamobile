import {Block, BlockTitle, Button, List, ListInput} from "konsta/react";
import * as dayjs from 'dayjs'
import React, {useState} from "react";
import {getAuth} from "firebase/auth";
import firebaseApp from "@/firebase/config";

const auth = getAuth(firebaseApp);

const ChungNhan =()=>{
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    console.log(now)

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
                    label="Tên cơ sở sản xuất"
                    type="text"
                    placeholder="Nhập tên cơ sở sản xuất"
                    media={<i className="w-5 h-5 fa-solid fa-house-flag"></i>}
                />

                <ListInput
                    outline
                    label="Địa chỉ"
                    type="text"
                    placeholder="Nhập địa chỉ cụ thể"
                    media={<i className="w-5 h-5 fa-solid fa-location-dot"></i>}
                />
                <ListInput
                    outline
                    label="Diện tích"
                    type="text"
                    placeholder="Nhập diện tích canh tác"
                    media={<i className="w-5 h-5 fa-regular fa-square-plus"></i>}
                />

                <ListInput
                    outline
                    label="Tên chứng nhận"
                    type="text"
                    placeholder="Nhập tên chứng nhận"
                    media={<i className="w-5 h-5 fa-solid fa-stamp"></i>}
                />

                <ListInput
                    outline
                    label="Loại chứng nhận"
                    type="select"
                    dropdown
                    defaultValue=""
                    placeholder="Chọn loại chứng nhận ..."
                    media={<i className="w-5 h-5 fa-solid fa-certificate"></i>}
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
                />

                <ListInput
                    outline
                    id="customFile"
                    label="Hình ảnh"
                    type="file"
                    placeholder="Chọn hình ảnh"
                    media={<i className="w-5 h-5 fa-solid fa-image"></i>}
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