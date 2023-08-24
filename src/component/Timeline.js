import {Block, BlockTitle, List, ListItem} from "konsta/react";
import {useEffect, useState} from "react";
import * as dayjs from "dayjs";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import firebaseApp from "@/firebase/config";
import {getAuth} from "firebase/auth";

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp);
const TimelinePage = () => {
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    const [data, setData] = useState([])
    const currentUser = auth.currentUser?.email
    useEffect(() => {
       fetchData()
    }, []);
    const fetchData = async () => {
        const docRef = doc(db, 'khoaicth', 'nhatky');

        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
            const d = docSnapshot.data()?.data?.filter(i=>i.user===currentUser).sort((a,b) =>(new Date(b.dateCV)) - (new Date(a.dateCV)))
            setData(d);
            console.log('currentUser: ', currentUser)
            console.log('data: ', docSnapshot.data()?.data)
            console.log('data: ', docSnapshot.data()?.data?.filter(i=>i.user===currentUser))
        } else {
            console.log('Document not found!');
        }
    }
    return (
        <>
            <BlockTitle>Nhật ký</BlockTitle>
            <Block strong inset>
                <List strongIos outlineIos>
                    {/*<ListItem*/}
                    {/*    link*/}
                    {/*    chevronIcon={<i className="w-5 h-5 fa-solid fa-calendar"/>}*/}
                    {/*    title="Bón phân"*/}
                    {/*    after={''}*/}
                    {/*    subtitle={now}*/}
                    {/*    text="Bón phân NPK số lượng 10kg"*/}
                    {/*    media={*/}
                    {/*        <img*/}
                    {/*            className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"*/}
                    {/*            src="/khoailang.png"*/}
                    {/*            width="80"*/}
                    {/*            alt="demo"*/}
                    {/*        />*/}
                    {/*    }*/}
                    {/*/>*/}
                    {/*<ListItem*/}
                    {/*    link*/}
                    {/*    chevronIcon={<i className="w-5 h-5 fa-solid fa-calendar"/>}*/}

                    {/*    title="Tỉa cành"*/}
                    {/*    // after="$22"*/}
                    {/*    subtitle={now}*/}
                    {/*    text="Cắt tỉa cành, tạo thông thoáng cho cây."*/}
                    {/*    // media={*/}
                    {/*    //     <img*/}
                    {/*    //         className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"*/}
                    {/*    //         src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"*/}
                    {/*    //         width="80"*/}
                    {/*    //         alt="demo"*/}
                    {/*    //     />*/}
                    {/*    // }*/}
                    {/*/>*/}
                    {/*<ListItem*/}
                    {/*    link*/}
                    {/*    title="Sử dụng thuốc BVTV"*/}
                    {/*    chevronIcon={<i className="w-5 h-5 fa-solid fa-calendar"/>}*/}
                    {/*    subtitle={now}*/}
                    {/*    text="Sử dụng thuốc BVTV với liều lượng 1 chai cho 1 bình"*/}
                    {/*    media={*/}
                    {/*        <img*/}
                    {/*            className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"*/}
                    {/*            src="/khoailang.png"*/}
                    {/*            width="80"*/}
                    {/*            alt="demo"*/}
                    {/*        />*/}
                    {/*    }*/}
                    {/*/>*/}
                    {
                        data.map(item => {
                            return (
                                <ListItem
                                    link
                                    chevronIcon={<i className="w-5 h-5 fa-solid fa-calendar"/>}
                                    title={item.nameCV}
                                    after={''}
                                    subtitle={item.dateCV}
                                    text={item.detailCV}
                                    media={
                                        <img
                                            className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
                                            src="/khoailang.png"
                                            width="80"
                                            alt="demo"
                                        />
                                    }
                                />
                            )
                        })
                    }
                </List>

            </Block>
        </>
    );
};

export default TimelinePage;