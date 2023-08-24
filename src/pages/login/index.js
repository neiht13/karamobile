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
import {getFirestore} from "firebase/firestore";
import firebaseApp from "@/firebase/config";
import {signIn} from "next-auth/react";
import {useAuth} from "@/firebase/authContext";
import {useRouter} from "next/router";

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);


export default function FormInputsPage() {
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

    const [email, setEmail] = useState("" )
    const [password, setPassword] = useState("")

    const auth = getAuth(firebaseApp);
    const Sheet1= [

        {
            "id": 3,
            "name": "Lê Công Toàn",
            "diachi": "Phú Thạnh",
            "ha": 0.4,
            "account": "lecongtoan",
            "pass": "chauthanh123"
        },
        {
            "id": 4,
            "name": "Nguyễn Hữu Tâm",
            "diachi": "Phú Thạnh",
            "ha": 0.3,
            "account": "nguyenhuutam",
            "pass": "chauthanh123"
        },
        {
            "id": 5,
            "name": "Phạm Văn Bé Tám",
            "diachi": "Phú Thạnh",
            "ha": 0.5,
            "account": "phamvanbetam",
            "pass": "chauthanh123"
        },
        {
            "id": 6,
            "name": "Nguyễn Minh Cầu",
            "diachi": "Phú Thạnh",
            "ha": 0.5,
            "account": "nguyenminhcau",
            "pass": "chauthanh123"
        },
        {
            "id": 7,
            "name": "Trần Văn Nghĩa",
            "diachi": "Phú Thạnh",
            "ha": 0.2,
            "account": "tranvannghia",
            "pass": "chauthanh123"
        },
        {
            "id": 8,
            "name": "Lê Hoàng Thượng",
            "diachi": "Phú Thạnh",
            "ha": 0.5,
            "account": "lehoangthuong",
            "pass": "chauthanh123"
        },
        {
            "id": 9,
            "name": "Chế Văn Ba ",
            "diachi": "Phú Thạnh",
            "ha": 1,
            "account": "chevanba",
            "pass": "chauthanh123"
        },
        {
            "id": 10,
            "name": "Bùi Quốc Huy",
            "diachi": "Phú Thạnh",
            "ha": 2,
            "account": "buiquochuy",
            "pass": "chauthanh123"
        },
        {
            "id": 11,
            "name": "Nguyễn Văn Hai",
            "diachi": "Phú Thạnh",
            "ha": 0.5,
            "account": "nguyenvanhai",
            "pass": "chauthanh123"
        },
        {
            "id": 12,
            "name": "Mai Thiện Tâm",
            "diachi": "Phú Hòa",
            "ha": 0.8,
            "account": "maithientam",
            "pass": "chauthanh123"
        },
        {
            "id": 13,
            "name": "Chế Ngọc Em",
            "diachi": "Phú Hòa",
            "ha": 0.5,
            "account": "chengocem",
            "pass": "chauthanh123"
        },
        {
            "id": 14,
            "name": "Nguyễn Văn Huynh",
            "diachi": "Phú Mỹ",
            "ha": 1,
            "account": "nguyenvanhuynh",
            "pass": "chauthanh123"
        },
        {
            "id": 15,
            "name": "Trương Văn Trí",
            "diachi": "Phú Mỹ",
            "ha": 0.5,
            "account": "truongvantri",
            "pass": "chauthanh123"
        },
        {
            "id": 16,
            "name": "Võ Văn Út",
            "diachi": "Phú Mỹ",
            "ha": 0.5,
            "account": "vovanut",
            "pass": "chauthanh123"
        },
        {
            "id": 17,
            "name": "Nguyễn Tấn Út",
            "diachi": "Phú Mỹ",
            "ha": 1,
            "account": "nguyentanut",
            "pass": "chauthanh123"
        },
        {
            "id": 18,
            "name": "Nguyễn Tấn Thời",
            "diachi": "Phú Mỹ",
            "ha": 0.5,
            "account": "nguyentanthoi",
            "pass": "chauthanh123"
        },
        {
            "id": 19,
            "name": "Nguyễn Tấn Chính",
            "diachi": "Phú Mỹ",
            "ha": 0.5,
            "account": "nguyentanchinh",
            "pass": "chauthanh123"
        },
        {
            "id": 20,
            "name": "Tạ Thanh Tùng",
            "diachi": "Phú Hòa",
            "ha": 2,
            "account": "taminhtung",
            "pass": "chauthanh123"
        },
        {
            "id": 21,
            "name": "Lê Minh Hưởng",
            "diachi": "Phú Hòa",
            "ha": 2,
            "account": "leminhhuong",
            "pass": "chauthanh123"
        }
    ]

    const signUp = ()=>{
        Sheet1.forEach(acc => {
            createUserWithEmailAndPassword(auth, acc.account+'@khoailangchauthanhdt.vn', 'chauthanh123')
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        })

    }
    const signInn = ()=>{
        signInWithEmailAndPassword(auth, email+ '@khoailangchauthanhdt.vn', password)
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
         signInWithEmailAndPassword(auth, email+ '@khoailangchauthanhdt.vn', password)
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
                    placeholder="Nhập tài khoản"
                    onChange={e=>setEmail(e.target.value)}
                    media={<i className="w-5 h-5 fa-solid fa-at fa-spin"></i>}
                />

                <ListInput
                    outline
                    label="Password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    onChange={e=>setPassword(e.target.value)}
                    media={<i className="w-5 h-5 fa-solid fa-key fa-flip"></i>}
                />

                {/*<ListInput*/}
                {/*    outline*/}
                {/*    label="Textarea"*/}
                {/*    type="textarea"*/}
                {/*    placeholder="Bio"*/}
                {/*    media={<i className="w-5 h-5 fa-brands fa-twitter" />}*/}
                {/*    inputClassName="!h-20 resize-none"*/}
                {/*/>*/}
            </List>
            <Block strong inset>

            <Button onClick={handleLogin}>Đăng nhập</Button>
            </Block>
        </Page>
    );
}