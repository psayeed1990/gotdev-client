import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import styles from './ThemeListSidebar.module.css';
import { apiCall } from './../../../api/';
import { UserContext } from '../../../contexts/UserContext';

const ThemeListSidebar = () => {
  const [lists, setLists] = useState(null);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const getLists = async () => {
        try {
          const data = await apiCall('GET', 'uploads/');

          return setLists(data.data.data);
        } catch (err) {
          return setLists([]);
        }
      };

      getLists();
    }
  }, [user]);

  useEffect(() => {
    if (window) {
      const themeLinks = document.getElementsByClassName('theme-links');
      for (var i = 0; i < themeLinks.length; i++) {
        const link = themeLinks[i].getElementsByTagName('a')[0];

        if (link.href === window.location.href) {
          if (document.getElementsByClassName('selected-theme')[0]) {
            document
              .getElementsByClassName('selected-theme')[0]
              .classList.remove('selected-theme');
          }
          link.classList.add('selected-theme');
        }
      }
    }
  });

  return (
    <div className={styles.sidebar}>
      <ul id="theme-name-sidebar">
        {lists?.map((list) => {
          return (
            <li className={`${styles.themeLinks} theme-links`} key={list._id}>
              <Link href={`/editor/${list._id}/`}>{list.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemeListSidebar;
