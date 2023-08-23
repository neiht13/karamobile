import {Block, BlockTitle, Button, List, ListInput} from "konsta/react";
import * as dayjs from 'dayjs'
import React, {useState} from "react";

const DanhMuc =({tab})=>{
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    console.log(now)

    const handleSave = () => {
        alert(JSON.stringify({ user: auth.currentUser.email, dateUpdate: now,
            nameNS, cssx, donggoi, hsd, imageNS
        }))
    }
    return (tab === 'thuoc' ?
        <>
            <BlockTitle>Danh mục thuốc</BlockTitle>
            <List strongIos insetIos>
                <ListInput
                    outline
                    label="Tên thuốc"
                    type="text"
                    placeholder="Nhập tên thuốc"
                    media={<i class="fa-solid fa-certificate"></i>}
                />
                <ListInput
                    outline
                    label="Hoạt chất"
                    type="text"
                    placeholder="Nhập tên hoạt chất"
                    media={<i class="fa-solid fa-certificate"></i>}
                />
                <ListInput
                    outline
                    label="Liều dùng"
                    type="text"
                    placeholder="Nhập liều dùng"
                    media={<i class="fa-solid fa-certificate"></i>}
                />
                <ListInput
                    outline
                    label="Cách dùng"
                    type="text"
                    placeholder="Nhập cách dùng"
                    media={<i class="fa-solid fa-certificate"></i>}
                />
            </List>

            <Block strong className="flex space-x-4">
                <Button onClick={handleSave}>Lưu</Button>
            </Block>
            <Block strong className="flex space-x-4">
            </Block>
        </> :

            <>
                <BlockTitle>Danh mục phân bón</BlockTitle>
                <List strongIos insetIos>
                    <ListInput
                        outline
                        label="Tên phân bón"
                        type="text"
                        placeholder="Nhập tên phân bón"
                        media={<i class="fa-solid fa-certificate"></i>}
                    />
                    <ListInput
                        outline
                        label="Hãng sản xuất"
                        type="text"
                        placeholder="Nhập tên hãng sản xuất"
                        media={<i class="fa-solid fa-certificate"></i>}
                    />
                    <ListInput
                        outline
                        label="Khối lượng"
                        type="text"
                        placeholder="Nhập khối lượng"
                        media={<i class="fa-solid fa-certificate"></i>}
                    />
                    <ListInput
                        outline
                        label="Cách sử dụng"
                        type="text"
                        placeholder="Nhập cách sử dụng"
                        media={<i class="fa-solid fa-certificate"></i>}
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
export default DanhMuc;