import { useContext } from 'react';
import styles from './Header.module.css';
import { AuthContext } from '../../contexts/AuthContext';
import {
  HiOutlineHome,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineBookmark,
  HiOutlineMail,
  HiOutlineDotsCircleHorizontal,
  HiOutlineDocumentText
} from "react-icons/hi";

import {
  HiHome,
  HiBell,
  HiUser,
  HiBookmark,
  HiMail,
  HiDotsCircleHorizontal,
  HiDocumentText
} from "react-icons/hi";

export default function Header({ onLogout }) {

  const { currentUser, activeComponent, setActiveComponent, showCreatePostModal, setShowCreatePostModal } = useContext(AuthContext);
  
  return (
      <nav className={styles.sidebar}>
        <div className={styles.logo}>
          <svg viewBox="0 0 24 24" width="30"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        </div>

        <div className={styles.navItems}>

          <div onClick={() => {
            setActiveComponent("Posts");
          }}>
            {activeComponent === "Posts"
              ? <HiHome className={styles.icon} />
              : <HiOutlineHome className={styles.icon} />}
            {activeComponent === "Posts" ? <strong>Posts</strong> : <p>Posts</p>}
          </div>

          <div onClick={() => {
            setActiveComponent("MyPosts");
          }}>
            {activeComponent === "MyPosts"
              ? <HiDocumentText className={styles.icon} />
              : <HiOutlineDocumentText className={styles.icon} />}
            {activeComponent === "MyPosts" ? <strong>My Posts</strong> : <p>My Posts</p>}
          </div>

          <div onClick={() => {
            setActiveComponent("Notifications");
          }}>
            {activeComponent === "Notifications"
              ? <HiBell className={styles.icon} />
              : <HiOutlineBell className={styles.icon} />}
            {activeComponent === "Notifications" ? <strong>Notifications</strong> : <p>Notifications</p>}
          </div>

          <div onClick={() => {
            setActiveComponent("Messages");
          }}>
            {activeComponent === "Messages"
              ? <HiMail className={styles.icon} />
              : <HiOutlineMail className={styles.icon} />}
            {activeComponent === "Messages" ? <strong>Messages</strong> : <p>Messages</p>}
          </div>

          <div onClick={() => {
            setActiveComponent("Bookmarks");
          }}>
            {activeComponent === "Bookmarks"
              ? <HiBookmark className={styles.icon} />
              : <HiOutlineBookmark className={styles.icon} />}
            {activeComponent === "Bookmarks" ? <strong>Bookmarks</strong> : <p>Bookmarks</p>}
          </div>

          <div onClick={() => {
            setActiveComponent("Profile");
          }}>
            {activeComponent === "Profile"
              ? <HiUser className={styles.icon} />
              : <HiOutlineUser className={styles.icon} />}
            {activeComponent === "Profile" ? <strong>Profile</strong> : <p>Profile</p>}
          </div>

          <div onClick={() => {
            setActiveComponent("More");
          }}>
            {activeComponent === "More"
              ? <HiDotsCircleHorizontal className={styles.icon} />
              : <HiOutlineDotsCircleHorizontal className={styles.icon} />}
            {activeComponent === "More" ? <strong>More</strong> : <p>More</p>}
          </div>

        </div>

        <button className={styles.postBtn} onClick={() => setShowCreatePostModal(!showCreatePostModal)}>
          Post
        </button>

        <div className={styles.userProfile} onClick={onLogout}>
          <div className={styles.avatar}>{currentUser?.name[0]}</div>
          <div className={styles.userInfo}>
            <strong>{currentUser?.email}</strong>
            <span>Logout</span>
          </div>
        </div>
      </nav>
  );
}
