import Link from 'next/link';
import styles from './UserSidebar.module.css';

const UserSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.userLinks}>
          <Link href="/user/profile">Profile</Link>
        </li>
        <li className={styles.userLinks}>
          <Link href="/user/uploads">Uploads</Link>
        </li>
        <li className={styles.userLinks}>
          <Link href="/editor">Theme Editor</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
