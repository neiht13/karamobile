import {Link, List, ListItem, Navbar, Popover} from "konsta/react";
import {getAuth, signOut} from "firebase/auth";
import {log} from "next/dist/server/typescript/utils";
import React, {useRef, useState} from "react";
import {useRouter} from "next/router";
import firebaseApp from "@/firebase/config";


const auth = getAuth(firebaseApp);

const NavHeader = () => {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const popoverTargetRef = useRef(null);
    const router = useRouter();

    const openPopover = (targetRef) => {
        popoverTargetRef.current = targetRef;
        setPopoverOpened(true);
    };
  return(<>
      <Navbar title="Khoai Lang Châu Thành" right={
          // !auth.currentUser ?
          //     <a href={'/login'}>Đăng nhập</a> :
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
  </>)

}
export default NavHeader;