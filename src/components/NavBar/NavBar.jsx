import { useContext } from 'react';
import styles from './NavBar.module.css';
import { AuthContext } from '../../contexts/AuthContext';
import {
  HiHome,
  HiDocumentText,
  HiBell,
  HiUser
} from "react-icons/hi";
import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineBell,
  HiOutlineUser
} from "react-icons/hi";

export default function NavBar({ onLogout }) {
  const { activeComponent, setActiveComponent } = useContext(AuthContext);

  const mobileTabs = [
    { name: "Posts", icon: HiHome, outlineIcon: HiOutlineHome },
    { name: "MyPosts", icon: HiDocumentText, outlineIcon: HiOutlineDocumentText },
    { name: "Notifications", icon: HiBell, outlineIcon: HiOutlineBell },
    { name: "Profile", icon: HiUser, outlineIcon: HiOutlineUser },
  ];

  return (
      <div className={styles.bottomNav}>
        {mobileTabs.map(tab => {
          const Icon = activeComponent === tab.name ? tab.icon : tab.outlineIcon;
          return (
            <div key={tab.name} onClick={() => setActiveComponent(tab.name)}>
              <Icon className={styles.icon} />
            </div>
          );
        })}
      </div>
  );
}