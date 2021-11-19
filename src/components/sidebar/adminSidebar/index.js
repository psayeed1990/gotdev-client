import Link from 'next/link';
import styles from './AdminSidebar.module.css';

const AdminSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.adminLinks}>
          <Link href="/admin/users/list-users">Users</Link>
          <ul className={styles.subMenu}>
            <li className={`${styles.adminLinks}`}>
              <Link href="/admin/users/list-users">Search Users</Link>
            </li>
            <li className={`${styles.adminLinks}`}>
              <Link href="/admin/users/create-user">Create User</Link>
            </li>
          </ul>
        </li>
        <li className={styles.adminLinks}>
          <Link href="/admin/profile">Profile</Link>
        </li>
        <li className={styles.adminLinks}>
          <Link href="/admin/uploads">Uploads</Link>
        </li>
        <li className={styles.adminLinks}>
          <Link href="/editor">Theme Editor</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
