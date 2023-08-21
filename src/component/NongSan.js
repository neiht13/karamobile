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
                    label="Tên công việc"
                    type="text"
                    placeholder="Nhập tên công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Loại công việc"
                    type="select"
                    dropdown
                    defaultValue="chung"
                    placeholder="Chọn loại công việc ..."
                    media={<i class="fa-solid fa-heart"></i>}
                >
                    <option value='chung'>&nbsp;Công việc chung</option>
                    <option value='thamvuon'>&nbsp;Thăm vườn</option>
                    <option value='tuoinuoc'>&nbsp;Tưới nước</option>
                    <option value='bonphan'>&nbsp;Bón phân</option>
                    <option value='bvtv'>&nbsp;Sử dụng thuốc BVTV</option>
                    <option value='tiacanh'>&nbsp;Tỉa cành</option>
                    <option value='thuhoach'>&nbsp;Thu Hoạch</option>
                    <option value='khac'>&nbsp;Công việc khác</option>
                </ListInput>


                <ListInput
                    outline
                    label="Mô tả công việc"
                    type="textarea"
                    placeholder="Chi tiết công việc"
                    media={<i class="fa-solid fa-heart"></i>}
                    inputClassName="h-20 resize-none"
                />

                <ListInput
                    outline
                    label="Ngày thực hiện"
                    type="date"
                    defaultValue={now}
                    placeholder="Please choose..."
                    media={<i class="fa-solid fa-heart"></i>}
                />
                <ListInput
                    outline
                    label="Vật tư BVTV"
                    type="select"
                    dropdown
                    defaultValue="2023"
                    placeholder="Chọn mùa vụ ..."
                    media={<i class="fa-solid fa-heart"></i>}
                >
                    <option value='2022'>&nbsp;2022</option>
                    <option value='2023'>&nbsp;2023</option>
                    <option value='2024'>&nbsp;2024</option>

                </ListInput>
                <ListInput
                    outline
                    label="Mùa vụ"
                    type="select"
                    dropdown
                    defaultValue="2023"
                    placeholder="Chọn mùa vụ ..."
                    media={<i class="fa-solid fa-heart"></i>}
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
                    media={<i class="fa-solid fa-heart"></i>}
                />

            </List>
        </>
    )
}
export default NongSan;