import {
  Page,
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  Link,
  BlockTitle,
    Popover
} from 'konsta/react';
import { Link as LinkScroll } from "react-scroll";

import React, {useEffect, useRef, useState} from "react";
import { getFirestore,collection, getDocs, doc, setDoc } from "firebase/firestore";
import firebaseApp from "@/firebase/config";
import {data} from "autoprefixer";
import {log} from "next/dist/server/typescript/utils";
import SeoHead from "@/component/SeoHead";
import {signOut, useSession} from "next-auth/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useAuth} from "@/firebase/authContext";
import dynamic from "next/dynamic";
import ChungNhan from "@/component/ChungNhan";
import NavHeader from "@/component/Navbar";
import Nav from "@/component/Nav";

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);
const MyAwesomeMap = dynamic(() => import("@/component/MapExample"), { ssr:false })

export default function ChungNha() {
    const [listBai, setListBai] = useState([])
    const [listScores, setListScores] = useState([])
    const [update, setUpdate] = useState(false)
    console.log(auth.currentUser)

    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    //useEffect (()=>{
    //     //getDocs(collection(db, 'kara')).then(r=>{
    //             const data = r.docs.map(doc => doc.data())
    //             setListBai(data)
    //             console.log(data)
    //             }
    //         )
    // },[])
    // listBai.forEach((b,i)=>{
    //     let sum = 0;
    //     let tt = 0;
    //     listScores.filter(l => l.name === b.tenBai).forEach(i=>{
    //         sum += i.score
    //         tt++;
    //     })
    //     console.log(sum)
    //     listBai[i].scoreTB = sum/tt
    // })
    // console.log('list', listBai)
    const data = {
        'Thein':"Yellow Submarine",
        nguoiHat:"Beatles",
        linkYoutube: "https://www.youtube.com/watch?v=07BWY00MzZc",
    };






  return (
      <>
      <Page>
          <NavHeader/>
          <ChungNhan/>
          <Nav/>
      </Page>
      </>
  );
}