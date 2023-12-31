import {
    Page,
    Navbar,
    Block,
    Button,
    List,
    ListItem,
    Link,
    BlockTitle,
    Popover, SegmentedButton, Segmented
} from 'konsta/react';
import { Link as LinkScroll } from "react-scroll";

import React, {useEffect, useRef, useState} from "react";
import { getFirestore,collection, getDocs, doc, setDoc } from "firebase/firestore";
import firebaseApp from "@/firebase/config";
import {data} from "autoprefixer";
import {log} from "next/dist/server/typescript/utils";
import SeoHead from "@/component/SeoHead";
import { useSession} from "next-auth/react";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import {useAuth} from "@/firebase/authContext";
import dynamic from "next/dynamic";
import NhatKy from "@/component/NhatKy";
import { useRouter } from "next/router";
import * as dayjs from 'dayjs'
import DanhMuc from "@/component/DanhMuc";

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);
const MyAwesomeMap = dynamic(() => import("@/component/MapExample"), { ssr:false })

export default function Home() {
    const [listBai, setListBai] = useState([])
    const [listScores, setListScores] = useState([])
    const [update, setUpdate] = useState(false)
    console.log(auth.currentUser)
    const router = useRouter();
    const [now, setNow] = useState(dayjs().format('YYYY-MM-DD'))
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    // useEffect (()=>{
        //getDocs(collection(db, 'kara')).then(r=>{
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

    const res = () =>  {
        // setDoc(doc(db, "kara", (Math.random() + 1).toString(36).substring(7)), {
        //     name: 'Thein',
        //     user: 'naux',
        //     lis: [{name: 'Thein',
        //         user: 'naux', list:[{name: 'Thein',
        //             user: 'naux',}]},{name: 'Thein',
        //         user: 'naux',}]
        // }).then(r  => console.log(r));
    }
    // let listBai = [
    //     {
    //     'Thein':"Yellow Submarine",
    //     nguoiHat:"Beatles",
    //     linkYoutube: "https://www.youtube.com/watch?v=07BWY00MzZc",
    // } ,{
    //     'Thein':"Yellow Submarine",
    //     nguoiHat:"Beatles",
    //     linkYoutube: "https://www.youtube.com/watch?v=spNpLl9NslA",
    // } ,{
    //     'Thein':"Yellow Submarine",
    //     nguoiHat:"Beatles",
    //     linkYoutube: "https://www.youtube.com/watch?v=lxPeCtiXor8",
    // }
    // ]


const tb = (bai) => {
    // let sum = 0;
    // let tt = 0;
    // listScores.filter(l => l.name === bai.tenBai).forEach(i=>{
    //     sum += i.score
    //     tt++;
    // })
    // console.log(sum)
    // return sum/tt;
}

    // const { data: session, status } = useSession()
    const { isLoggedIn } = useAuth();
    const [popoverOpened, setPopoverOpened] = useState(false);
    const popoverTargetRef = useRef(null);
    const [activeSegmented, setActiveSegmented] = useState(1);

    const openPopover = (targetRef) => {
        popoverTargetRef.current = targetRef;
        setPopoverOpened(true);
    };
  return (
      <>
      <Page>
          <Navbar title="Khoai Lang Châu Thành" right={
              !auth.currentUser ?
              <a href={'/login'}>Đăng nhập</a> :
              <Link
              className="popover-navbar-link"
              navbar
              onClick={() => openPopover('.popover-navbar-link')}
          >
              <i className="w-5 h-5 fa-solid fa-user-large"></i>
          </Link>

          }>

          </Navbar>
          <Popover
              opened={popoverOpened}
              target={popoverTargetRef.current}
              onBackdropClick={() => setPopoverOpened(false)}
          >
              <List nested>
                  <ListItem
                      title="Sửa thông tin cá nhân"
                      link
                      onClick={() => {
                          router.push('/account')
                          setPopoverOpened(false)}}
                  />
                  <ListItem
                      title="Đăng xuất"
                      link
                      onClick={() => {
                          signOut(auth).then(e=> router.push('login'))
                              .catch(e=>log(e));
                          setPopoverOpened(false)}}

                  />
              </List>
          </Popover>

        {/*<Block strong>*/}
        {/*  <p className="text-center font-bold p-1">*/}
        {/*    CUỘC THI HÁT KARAOKE MỪNG THÀNH LẬP NGÀNH*/}
        {/*  </p>*/}
        {/*</Block>*/}
        {/*  <Block>*/}
        {/*      <MyAwesomeMap zoom={16}*/}
        {/*                    center={{lat: '10.4552072',lng:'105.629261'}}*/}
        {/*                    markers={[*/}
        {/*                        {lat: '10.4552072',lng:'105.629', address:'My Location'},*/}
        {/*                        {lat: '10.4552',lng:'105.661', address:'My Location 2'},*/}
        {/*                        {lat: '10.45072',lng:'105.6261', address:'My Location 3'},*/}
        {/*                        {lat: '10.45572',lng:'105.61', address:'My Location  4'},*/}
        {/*                    ]}*/}
        {/*                    height={400}/>*/}

        {/*  </Block>*/}

          {/*<NhatKy/>*/}
          <BlockTitle></BlockTitle>

          <Segmented strong rounded>
              <SegmentedButton
                  strong
                  rounded
                  active={activeSegmented === 1}
                  onClick={() => setActiveSegmented(1)}
              >
                  Thuốc BVTV
              </SegmentedButton>
              <SegmentedButton
                  strong

                  active={activeSegmented === 2}
                  onClick={() => setActiveSegmented(2)}
              >
                  Phân bón
              </SegmentedButton>
          </Segmented>
          <DanhMuc tab={activeSegmented === 1 ? 'thuoc' : 'phanbon'}/>
      </Page>
      </>
  );
}