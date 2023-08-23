import React, {useEffect, useState} from 'react';
import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    List,
    ListInput, Button,
} from 'konsta/react';
import {createUserWithEmailAndPassword, getAuth,updateProfile, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import firebaseApp from "@/firebase/config";
import {signIn} from "next-auth/react";
import {useAuth} from "@/firebase/authContext";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

const MyAwesomeMap = dynamic(() => import("@/component/MapExample"), { ssr:false })

export default function AccountPage() {
    const [name, setName] = useState({ value: '', changed: false });
    const [demoValue, setDemoValue] = useState('');

    // useEffect(()=>{
    //     updateProfile(auth.currentUser, {
    //         displayName: "Thein", photoURL: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/351758889_212144804531630_4603994211041501644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SiqQHcnuStQAX_-0OeR&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBOsuAv3oa1q2_aIKoV_X9L_aFv0bnLJmWfx6aDuh7vEw&oe=64E84477"
    //     })
    // },[])
    const onNameChange = (e) => {
        setName({ value: e.target.value, changed: true });
    };
    const onDemoValueChange = (e) => {
        setDemoValue(e.target.value);
    };
    const onDemoValueClear = () => {
        setDemoValue('');
    };

    const [email, setEmail] = useState("thienphan9612@gmail.com " )
    const [password, setPassword] = useState("hj6scsg4")

    const auth = getAuth(firebaseApp);
    const signUp = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const signInn = ()=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                signIn(user.email)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
     const { isLoggedIn, login } = useAuth();
    const router = useRouter()

     const handleLogin = () => {
         signInWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
                 // Signed in
                 login()
                 console.log(userCredential.user.email)
                 router.push('/')
                 debugger;
                 // ...
             })
             .catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
             });
 }
    return (
        <Page>
            <Navbar

                left={
                    <NavbarBackLink text="Back" onClick={() => history.back()} />
                }
                title='Đăng nhập/ Đăng ký'
            />


            <BlockTitle>Đăng nhập</BlockTitle>
            <List strongIos insetIos>

                <ListInput
                    outline
                    label="Tài khoản"
                    type="text"
                    disabled

                    value={auth.currentUser?.email}
                    placeholder=""
                    onChange={e=>setEmail(e.target.value)}
                    media={<i class="fa-solid fa-at fa-spin"></i>}
                />
                <ListInput
                    outline
                    label="Tên"
                    type="text"
                    placeholder="Nhập Họ và tên"
                    onChange={e=>setEmail(e.target.value)}
                    media={<i class="fa-solid fa-file-signature fa-spin"></i>}
                />
                <ListInput
                    outline
                    label="Số điện thoai"
                    type="number"
                    placeholder="Nhập số điện thoại"
                    onChange={e=>setEmail(e.target.value)}
                    media={<i class="fa-solid fa-at fa-spin"></i>}
                />
                <ListInput
                    outline
                    label="Quyền"
                    type="text"
                    disabled
                    placeholder="Người dùng"
                    onChange={e=>setEmail(e.target.value)}
                    media={<i class="fa-solid fa-at fa-spin"></i>}
                />
                <ListInput
                    outline
                    label="Trạng thái"
                    type="text"
                    disabled
                    placeholder="Hoạt động"
                    onChange={e=>setEmail(e.target.value)}
                    media={<i class="fa-solid fa-at fa-spin"></i>}
                />
                <ListInput
                    outline
                    label="Địa chỉ"
                    type="textarea"
                    placeholder="Nhập địa chỉ chi tiết"
                    onChange={e=>setEmail(e.target.value)}
                    media={<i class="fa-solid fa-at fa-spin"></i>}
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
                {/*    media={<i class="fa-brands fa-twitter" />}*/}
                {/*    inputClassName="!h-20 resize-none"*/}
                {/*/>*/}
            </List>
            <Button onClick={handleLogin}>Lưu</Button>
        </Page>
    );
}