import { useRouter } from "next/router";
import {Link as LinkScroll} from "react-scroll";
import React, {useState} from "react";
import {Tabbar, TabbarLink} from "konsta/react";


/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const Nav = (props) => {
  const router = useRouter();
    console.log('router.pathname', router.pathname)
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  return (
      // <nav className="fixed bottom-0 left-0 right-0 z-20 shadow-t h-10 mb-2">
      //   <div className="bg-white">
      //     <ul className="flex w-full justify-between items-center text-black-500">
      //       <a
      //           href={'/'}
      //           className={
      //               "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs transition-all " +
      //               (activeLink === "about"
      //                   ? "  border-orange-500 text-orange-500"
      //                   : " border-transparent")
      //           }
      //       >
      //           <i class="fa-solid fa-home text-primary fa-xl"></i>
      //         Trang chủ
      //       </a><a
      //           href={'nhatky'}
      //           className={
      //               "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs transition-all " +
      //               (activeLink === "about"
      //                   ? "  border-orange-500 text-orange-500"
      //                   : " border-transparent")
      //           }
      //       >
      //           <i class="fa-solid fa-list-check text-primary fa-xl"></i>
      //         Nhật ký
      //       </a>
      //         <a
      //           href={'nongsan'}
      //           className={
      //               "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs transition-all " +
      //               (activeLink === "about"
      //                   ? "  border-orange-500 text-orange-500"
      //                   : " border-transparent")
      //           }
      //       >
      //           <i class="fa-solid fa-lemon text-primary fa-xl"></i>
      //         Nông sản
      //       </a>
      //         <a
      //           href={'chungnhan'}
      //           className={
      //               "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs transition-all " +
      //               (activeLink === "about"
      //                   ? "  border-orange-500 text-orange-500"
      //                   : " border-transparent")
      //           }
      //       >
      //           <i class="fa-solid fa-stamp text-primary fa-xl"></i>
      //         Chứng nhận
      //       </a>
      //     </ul>
      //   </div>
      // </nav>

      <Tabbar
          labels={true}
          icons={true}
          className="left-0 bottom-0 fixed"
      >
          <TabbarLink
              active={router.pathname === '/'}
              onClick={() => {router.push('/')}}
              icon={
                  <i class="fa-solid fa-home"></i>
              }
              label={'Trang chủ'}
          /><TabbarLink
          active={router.pathname === '/nhatky'}
              onClick={() => {router.push('/nhatky')}}
              icon={
                  <i class="fa-solid fa-calendar-days"></i>
              }
              label={'Nhật ký'}
          /><TabbarLink
          active={router.pathname === '/nongsan'}
              onClick={() => {router.push('/nongsan')}}
              icon={
                  <i class="fa-solid fa-lemon"></i>
              }
              label={'Nông sản'}
          /><TabbarLink
          active={router.pathname === '/chungnhan'}
              onClick={() => {router.push('/chungnhan')}}
              icon={
                  <i class="fa-solid fa-stamp"></i>
              }
              label={'Chứng nhận'}
          />
          {/*<TabbarLink*/}
          {/*active={router.pathname === '/danhmuc'}*/}
          {/*    onClick={() => {router.push('/danhmuc')}}*/}
          {/*    icon={*/}
          {/*        <i class="fa-solid fa-list"></i>*/}
          {/*    }*/}
          {/*    label={'Danh mục'}*/}
          {/*/>*/}

      </Tabbar>
  );
};


export default Nav;