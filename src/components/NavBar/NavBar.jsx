
import { useContext } from 'react';
import styles from './NavBar.module.css';
import { AuthContext } from '../../contexts/AuthContext';

import {
  HiHome,
  HiDocumentText,
  HiLogout,
  HiPlusCircle
} from "react-icons/hi";

import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlinePlusCircle
} from "react-icons/hi";

export default function NavBar({ onLogout }) {
  const { activeComponent, setActiveComponent, setShowCreatePostModal, showCreatePostModal } = useContext(AuthContext);

  return (
    <div className={styles.bottomNav}>
      <div 
        className={activeComponent === "Posts" ? styles.activeTab : ""} 
        onClick={() => setActiveComponent("Posts")}
      >
        {activeComponent === "Posts"
          ? <HiHome className={styles.icon} />
          : <HiOutlineHome className={styles.icon} />}
      </div>

      <div 
        className={activeComponent === "MyPosts" ? styles.activeTab : ""} 
        onClick={() => setActiveComponent("MyPosts")}
      >
        {activeComponent === "MyPosts"
          ? <HiDocumentText className={styles.icon} />
          : <HiOutlineDocumentText className={styles.icon} />}
      </div>

      <div 
        className={showCreatePostModal === true ? styles.activeTab : ""} 
        onClick={() => 
        {
          setShowCreatePostModal(true)
        }
        }
      >
        {showCreatePostModal === true
          ? <HiPlusCircle className={styles.icon} />
          : <HiOutlinePlusCircle className={styles.icon} />}
      </div>

      <div onClick={onLogout}>
        <HiLogout className={styles.icon} />
      </div>
    </div>
  );
}
