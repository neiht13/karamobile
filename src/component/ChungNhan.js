import {BlockTitle, List, ListInput} from "konsta/react";
import * as dayjs from 'dayjs'
import {useState} from "react";

const ChungNhan =()=>{
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    console.log(now)
    return (
        <>
            <BlockTitle>Chi tiết nông sản</BlockTitle>
            <List strongIos insetIos>
                <ListInput
                    outline
                    label="Tên chứng nhận"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Tên cơ sở sản xuất"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />

                <ListInput
                    outline
                    label="Địa chỉ"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Diện tích"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Loại chứng nhận"
                    type="select"
                    dropdown
                    defaultValue=""
                    placeholder="Chọn loại công việc ..."
                    media={<i class="fa-solid fa-heart"></i>}
                >
                    <option value=''>&nbsp;--Chọn loại chứng chỉ--</option>
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
                    media={<i class="fa-solid fa-heart"></i>}
                />


                <ListInput
                    outline
                    id="customFile"
                    label="Hình ảnh"
                    type="file"
                    placeholder="Chọn hình ảnh"
                    media={<i class="fa-solid fa-heart"></i>}
                />

            </List>
        </>
    )
}
export default ChungNhan;