import {BlockTitle, List, ListInput} from "konsta/react";
import * as dayjs from 'dayjs'
import {useState} from "react";

const NongSan =()=>{
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    console.log(now)
    return (
        <>
            <BlockTitle>Chi tiết nông sản</BlockTitle>
            <List strongIos insetIos>
                <ListInput
                    outline
                    label="Mã nông sản"
                    type="text"
                    disabled
                    info="Không nhập dòng này"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Tên nông sản"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Quy cách đóng gói"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />

                <ListInput
                    outline
                    label="Cơ sở sản xuất"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Thời hạn sử dụng"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Loại chứng chỉ"
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
export default NongSan;