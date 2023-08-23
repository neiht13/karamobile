import {Block, BlockTitle, List, ListItem} from "konsta/react";
import {useState} from "react";
import * as dayjs from "dayjs";

const TimelinePage = () => {
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))

    return (
        <>
            <BlockTitle>Nhật ký</BlockTitle>
            <Block strong inset>
                <List strongIos outlineIos>
                    <ListItem
                        link
                        chevronIcon={<i className="w-5 h-5 fa-solid fa-calendar"/>}
                        title="Bón phân"
                        after={''}
                        subtitle={now}
                        text="Bón phân NPK số lượng 10kg"
                        media={
                            <img
                                className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
                                src="/khoailang.png"
                                width="80"
                                alt="demo"
                            />
                        }
                    />
                    <ListItem
                        link
                        chevronIcon={<i className="w-5 h-5 fa-solid fa-calendar"/>}

                        title="Tỉa cành"
                        // after="$22"
                        subtitle={now}
                        text="Cắt tỉa cành, tạo thông thoáng cho cây."
                        // media={
                        //     <img
                        //         className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
                        //         src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
                        //         width="80"
                        //         alt="demo"
                        //     />
                        // }
                    />
                    <ListItem
                        link
                        title="Sử dụng thuốc BVTV"
                        chevronIcon={<i className="w-5 h-5 fa-solid fa-calendar"/>}
                        subtitle={now}
                        text="Sử dụng thuốc BVTV với liều lượng 1 chai cho 1 bình"
                        media={
                            <img
                                className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
                                src="/khoailang.png"
                                width="80"
                                alt="demo"
                            />
                        }
                    />
                </List>

            </Block>
        </>
    );
};

export default TimelinePage;