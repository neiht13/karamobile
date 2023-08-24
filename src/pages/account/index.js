import React, {useEffect, useState} from 'react';
import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    List,
    ListInput, Button, Block,
} from 'konsta/react';
import {createUserWithEmailAndPassword, getAuth,updateProfile, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
import firebaseApp from "@/firebase/config";
import {signIn} from "next-auth/react";
import {useAuth} from "@/firebase/authContext";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import * as dayjs from "dayjs";

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

const MyAwesomeMap = dynamic(() => import("@/component/MapExample"), { ssr:false })

export default function AccountPage() {

    // useEffect(()=>{
    //     updateProfile(auth.currentUser, {
    //         displayName: "Thein", photoURL: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/351758889_212144804531630_4603994211041501644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SiqQHcnuStQAX_-0OeR&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBOsuAv3oa1q2_aIKoV_X9L_aFv0bnLJmWfx6aDuh7vEw&oe=64E84477"
    //     })
    // },[])




    const auth = getAuth(firebaseApp);
    // const signUp = ()=>{
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             console.log(user)
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // }
    // const signInn = ()=>{
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             console.log(user);
    //             signIn(user.email)
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // }
    //  const { isLoggedIn, login } = useAuth();
    const router = useRouter()



    const [email, setEmail] = useState("thienphan9612@gmail.com " )
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("Người dùng")
    const [diaChi, setDiaChi] = useState("")
    const [status, setStatus] = useState("Hoạt động")
    const [image, setImage] = useState("")
    const currentUser = auth.currentUser?.email
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
        const docRef = doc(db, 'khoaicth', 'account');

        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            const d = docSnapshot.data()?.data?.filter(i=>i.user===currentUser);
            if (d && d.length>0) {
                setName(d[0].name)
                setEmail(d[0].email)
                setPhone(d[0].phone)
                setDiaChi(d[0].diaChi)
                setStatus(d[0].status)
                setRole(d[0].role)
            }
        } else {
            console.log('Document not found!');
        }
    }
    const handleSave = () => {
        setDoc(doc(db, "khoaicth", 'account'), {
            data: [
                {
                    idNK: (Math.random() + 1).toString(36).substring(7),
                    user: auth.currentUser.email,
                    name, email, phone, diaChi, status, role, image,
                    dateUpdate: now
                }]}
        ).then(r  => router.push('/')
        );
    }
    return (
        <Page>
            <Navbar

                left={
                    <NavbarBackLink text="Back" onClick={() => history.back()} />
                }
                title='Khoai lang Châu Thành'
            />


            <BlockTitle>Chỉnh sửa thông tin cá nhân</BlockTitle>
            <List strongIos insetIos>

                <ListInput
                    outline
                    label="Tài khoản"
                    type="text"
                    disabled
                    value={auth.currentUser?.email}
                    placeholder=""
                    onChange={e=>setEmail(e.target.value)}
                    media={<i className="w-5 h-5 fa-solid fa-at"></i>}
                />
                <ListInput
                    outline
                    label="Tên"
                    type="text"
                    placeholder="Nhập Họ và tên"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    media={<i className="w-5 h-5 fa-solid fa-file-signature"></i>}
                />
                <ListInput
                    outline
                    label="Số điện thoại"
                    type="number"
                    placeholder="Nhập số điện thoại"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                    media={<i className="w-5 h-5 fa-solid fa-phone"></i>}
                />
                <ListInput
                    outline
                    label="Quyền"
                    type="text"
                    disabled
                    placeholder="Người dùng"
                    value={role}
                    onChange={e=>setRole(e.target.value)}
                    media={<i className="w-5 h-5 fa-solid fa-hand"></i>}
                />
                <ListInput
                    outline
                    label="Trạng thái"
                    type="text"
                    disabled
                    placeholder="Hoạt động"
                    value={status}
                    onChange={e=>setStatus(e.target.value)}
                    media={<i className="w-5 h-5 fa-solid fa-circle"></i>}
                />
                <ListInput
                    outline
                    label="Địa chỉ"
                    type="textarea"
                    placeholder="Nhập địa chỉ chi tiết"
                    value={diaChi}
                    onChange={e=>setDiaChi(e.target.value)}
                    media={<i className="w-5 h-5 fa-solid fa-map"></i>}
                />

                <ListInput
                    outline
                    id="customFile"
                    label="Hình ảnh"
                    type="file"
                    placeholder="Chọn hình ảnh"
                    media={<i className="w-5 h-5 fa-solid fa-image"></i>}

                    value={image}
                    onChange={e=>setImage(e.target.value)}
                />
                      <MyAwesomeMap zoom={16}
                                    center={{lat: '10.4552072',lng:'105.629261'}}
                                    markers={[
                                        {lat: '10.4552072',lng:'105.629', address:'My Location'},
                                    ]}
                                    height={200}/>



                {/*<ListInput*/}
                {/*    outline*/}
                {/*    label="Textarea"*/}
                {/*    type="textarea"*/}
                {/*    placeholder="Bio"*/}
                {/*    media={<i className="w-5 h-5 fa-brands fa-twitter" />}*/}
                {/*    inputClassName="!h-20 resize-none"*/}
                {/*/>*/}
            </List>
            <Button onClick={handleSave}>Lưu</Button>

            <Block strong className="flex space-x-4">
            </Block>
        </Page>

    );
}