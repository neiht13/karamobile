import { useRouter } from "next/router";
import {Link as LinkScroll} from "react-scroll";
import React, {useState} from "react";


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

  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  return (
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t ">
        <div className="bg-white">
          <ul className="flex w-full justify-between items-center text-black-500">
            <a
                href={'/'}
                className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs transition-all " +
                    (activeLink === "about"
                        ? "  border-orange-500 text-orange-500"
                        : " border-transparent")
                }
            >
                <i className="fa-solid fa-home text-primary fa-xl"></i>
              Trang chủ
            </a><a
                href={'nhatky'}
                className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs transition-all " +
                    (activeLink === "about"
                        ? "  border-orange-500 text-orange-500"
                        : " border-transparent")
                }
            >
                <i className="fa-solid fa-list-check text-primary fa-xl"></i>
              Nhật ký
            </a>
              <a
                href={'nongsan'}
                className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs transition-all " +
                    (activeLink === "about"
                        ? "  border-orange-500 text-orange-500"
                        : " border-transparent")
                }
            >
                <i className="fa-solid fa-list-check text-primary fa-xl"></i>
              Nông sản
            </a>
              <a
                href={'chungnhan'}
                className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs transition-all " +
                    (activeLink === "about"
                        ? "  border-orange-500 text-orange-500"
                        : " border-transparent")
                }
            >
                <i className="fa-solid fa-list-check text-primary fa-xl"></i>
              Chứng nhận
            </a>
          </ul>
        </div>
      </nav>
  );
};


export default Nav;