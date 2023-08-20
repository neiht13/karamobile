import {
  Page,
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  Link,
  BlockTitle,
} from 'konsta/react';
import { Link as LinkScroll } from "react-scroll";

import React, {useEffect, useState} from "react";
import { getFirestore,collection, getDocs, doc, setDoc } from "firebase/firestore";
import firebaseApp from "./../firebase/config";
import {data} from "autoprefixer";
import {log} from "next/dist/server/typescript/utils";
import SeoHead from "@/component/SeoHead";
import {useSession} from "next-auth/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useAuth} from "@/firebase/authContext";
import dynamic from "next/dynamic";

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);
const MyAwesomeMap = dynamic(() => import("@/component/MapExample"), { ssr:false })

export default function Home() {
    const [listBai, setListBai] = useState([])
    const [listScores, setListScores] = useState([])
    const [update, setUpdate] = useState(false)
    console.log(auth.currentUser)

    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect (()=>{
        getDocs(collection(db, 'kara')).then(r=>{
                const data = r.docs.map(doc => doc.data())
                setListBai(data)
                console.log(data)
                }
            )
        getDocs(collection(db, 'scores')).then(r=>{
                const data = r.docs.map(doc => doc.data())
                setListScores(data)
                }
            )



    },[])
    listBai.forEach((b,i)=>{
        let sum = 0;
        let tt = 0;
        listScores.filter(l => l.name === b.tenBai).forEach(i=>{
            sum += i.score
            tt++;
        })
        console.log(sum)
        listBai[i].scoreTB = sum/tt
    })
    console.log('list', listBai)
    const data = {
        'Thein':"Yellow Submarine",
        nguoiHat:"Beatles",
        linkYoutube: "https://www.youtube.com/watch?v=07BWY00MzZc",
    };

    const res = () =>  {
        setDoc(doc(db, "kara", (Math.random() + 1).toString(36).substring(7)), {
            name: 'Thein',
            user: 'naux',
            lis: [{name: 'Thein',
                user: 'naux', list:[{name: 'Thein',
                    user: 'naux',}]},{name: 'Thein',
                user: 'naux',}]
        }).then(r  => console.log(r));
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
    let sum = 0;
    let tt = 0;
    listScores.filter(l => l.name === bai.tenBai).forEach(i=>{
        sum += i.score
        tt++;
    })
    console.log(sum)
    return sum/tt;
}

    // const { data: session, status } = useSession()
    const { isLoggedIn } = useAuth();

  return (
      <>
          <SeoHead title={'mKara'}/>
      <Page>
          <Navbar title="VNPT Đồng Tháp" >

          <Button className='left-0' href={'/login'}>Login</Button>
          </Navbar>
          {isLoggedIn ? <h1>Chào mừng đến với trang cá nhân!</h1> : <p>Vui lòng đăng nhập.</p>}

        <Block strong>
          <p className="text-center font-bold p-1">
            CUỘC THI HÁT KARAOKE MỪNG THÀNH LẬP NGÀNH
          </p>
        </Block>
          <Block>
              <MyAwesomeMap zoom={16}
                            center={{lat: '10.4552072',lng:'105.629261'}}
                            markers={[
                                {lat: '10.4552072',lng:'105.629', address:'My Location'},
                                {lat: '10.4552',lng:'105.661', address:'My Location 2'},
                                {lat: '10.45072',lng:'105.6261', address:'My Location 3'},
                                {lat: '10.45572',lng:'105.61', address:'My Location  4'},
                            ]}
                            height={400}/>

          </Block>

          <Block strong className="flex space-x-4">
              <Button onClick={res}>Cham diem</Button>
          </Block>
      </Page>
          <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t ">
              <div className="bg-white">
                  <ul className="flex w-full justify-between items-center text-black-500">
                      <LinkScroll
                          activeClass="active"
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          onSetActive={() => {
                              setActiveLink("about");
                          }}
                          className={
                              "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                              (activeLink === "about"
                                  ? "  border-orange-500 text-orange-500"
                                  : " border-transparent")
                          }
                      >
                          <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                          </svg>
                          About
                      </LinkScroll>
                      <LinkScroll
                          activeClass="active"
                          to="feature"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          onSetActive={() => {
                              setActiveLink("feature");
                          }}
                          className={
                              "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                              (activeLink === "feature"
                                  ? "  border-orange-500 text-orange-500"
                                  : " border-transparent ")
                          }
                      >
                          <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                          </svg>
                          Feature
                      </LinkScroll>
                      <LinkScroll
                          activeClass="active"
                          to="pricing"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          onSetActive={() => {
                              setActiveLink("pricing");
                          }}
                          className={
                              "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                              (activeLink === "pricing"
                                  ? "  border-orange-500 text-orange-500"
                                  : " border-transparent ")
                          }
                      >
                          <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                          </svg>
                          Pricing
                      </LinkScroll>
                      <LinkScroll
                          activeClass="active"
                          to="testimoni"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          onSetActive={() => {
                              setActiveLink("testimoni");
                          }}
                          className={
                              "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                              (activeLink === "testimoni"
                                  ? "  border-orange-500 text-orange-500"
                                  : " border-transparent ")
                          }
                      >
                          <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                          </svg>
                          Testimonial
                      </LinkScroll>
                  </ul>
              </div>
          </nav>

      </>
  );
}