import React, { useState } from 'react';
import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    List,
    ListInput, Button,
} from 'konsta/react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import firebaseApp from "@/firebase/config";
import {signIn} from "next-auth/react";
import {useAuth} from "@/firebase/authContext";
import {useRouter} from "next/router";
const db = getFirestore(firebaseApp)


export default function FormInputsPage() {
    const [name, setName] = useState({ value: '', changed: false });
    const [demoValue, setDemoValue] = useState('');

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
                title='Đăng nhập'
            />


            <BlockTitle>Outline</BlockTitle>
            <List strongIos insetIos>

                <ListInput
                    outline
                    label="E-mail"
                    type="email"
                    placeholder="Your e-mail"
                    onChange={e=>setEmail(e.target.value)}
                    media={<i class="fa-brands fa-twitter" />}
                />

                <ListInput
                    outline
                    label="Password"
                    type="password"
                    placeholder="Your password"
                    onChange={e=>setPassword(e.target.value)}
                    media={<i class="fa-brands fa-twitter" />}
                />

                <ListInput
                    outline
                    label="Textarea"
                    type="textarea"
                    placeholder="Bio"
                    media={<i class="fa-brands fa-twitter" />}
                    inputClassName="!h-20 resize-none"
                />
            </List>
            <Button onClick={handleLogin}>Login</Button>
        </Page>
    );
}