import { Fragment, useEffect, useState } from 'react';
import styles from './List.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { apiCall } from '../../api';
import DeletePopups from '../popups/deletePopups';
import Pagination from 'next-pagination';
import 'next-pagination/dist/index.css';

const List = ({ model, url, singlePageUrl, data1, data2, heading }) => {
  const [markList, markListSet] = useState([]);
  const [deleteDetails, setDeleteDetails] = useState({});
  const [singleURL, singleURLSet] = useState('');
  const [showDelPopup, setShowDelPopup] = useState(false);
  const [lists, setLists] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getLists = async () => {
      try {
        const data = await apiCall(
          'GET',
          `${url}/?page=${router.query.page ? router.query.page : 1}&limit=${
            router.query.size ? router.query.size : 20
          }`
        );

        return setLists(data.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getLists();
  }, [router.query.page, router.query.size]);

  useEffect(() => {
    if (singlePageUrl) {
      singleURLSet(singlePageUrl);
    }
  }, [singlePageUrl]);

  const deleteData = async (type, id, b, c) => {
    setDeleteDetails({ type, id, b, c });
    setShowDelPopup(true);
  };

  const goToSinglePage = (pageId) => {
    router.push(`/${singlePageUrl}/${pageId}`);
  };

  const markListFunc = (e) => {
    // e.preventDefault();
    const index = markList.indexOf(e.target.value);
    if (index > -1) {
      markList.splice(index, 1);
      //e.currentTarget.setAttribute('selected', 'false');
      e.currentTarget.nextElementSibling.innerHTML = '';
    } else {
      markList.push(e.target.value);
      //e.currentTarget.setAttribute('selected', 'true');
      e.currentTarget.nextElementSibling.innerHTML = '&#x2715;';
    }
  };

  const selectDeselect = (e) => {
    e.preventDefault();
    const allList = document.querySelectorAll('.list-checkbox');
    for (var i = 0; i < allList.length; i++) {
      allList[i].click();
    }
  };

  const deleteMarked = async (e) => {
    e.preventDefault();
    const del = await apiCall('post', `${url}/bulk-delete`, 'Delete', markList);
    return router.reload(window.location.pathname);
  };
  return (
    <Fragment>
      <Head>
        <title>{heading}</title>
      </Head>
      {showDelPopup ? (
        <DeletePopups
          listState={lists}
          setListState={setLists}
          url={url}
          showDelPopup={showDelPopup}
          setShowDelPopup={setShowDelPopup}
          type={deleteDetails.type}
          id={deleteDetails.id}
          b={deleteDetails.b}
          c={deleteDetails.c}
        />
      ) : (
        ''
      )}

      <div className="content">
        <div className={styles.lists}>
          <h1 className="heading">{heading}</h1>
          <div className="listActionBar">
            <button id="selectBtn" onClick={selectDeselect}>
              Select All
            </button>
            <button id="deleteMarked" onClick={deleteMarked}>
              Delete Marked
            </button>
          </div>

          {lists?.map((list, index) => {
            return (
              <div className={styles.list} key={list._id}>
                <p className={styles.listWrapper}>
                  <span className={`${styles.left} ${styles.checkbox}`}>
                    <label className="container-checkbox">
                      <input
                        type="checkbox"
                        value={list._id}
                        onClick={markListFunc}
                        className="list-checkbox"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </span>
                  <span className={styles.left}>{index + 1}</span>
                  {/* <span className={styles.show1}><span className={styles.name}>ID:</span><span className={styles.value}>{list._id}</span></span><br /> */}
                  <span className={styles.show1}>
                    <span className={styles.name}>{data1}:</span>
                    <span className={styles.value}>{list[data1]}</span>
                  </span>
                  <span className={styles.show2}>
                    <span className={styles.name}>{data2}:</span>
                    <span className={styles.value}>{list[data2]}</span>
                  </span>

                  <span className={styles.right}>
                    <Link href={`/${singleURL}/${list._id}`} passHref>
                      <a className="edit-btn cursor-pointer">Edit</a>
                    </Link>

                    <span
                      className="delete-btn cursor-pointer"
                      onClick={() =>
                        deleteData(model, list._id, list.name, list.email)
                      }
                    >
                      Delete
                    </span>
                  </span>
                </p>
              </div>
            );
          })}

          <div className="pagination">
            <Pagination total={400} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// export const getStaticProps = async (context) => {
//   let listData = [];
//   try {
//     const { page } = context.query;
//     const { url } = context.props;
//     console.log(url);
//     const response = await axios({
//       method: 'get',
//       url: `http://localhost:5002/api/v1/${url}/?page=${page}`,
//       headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
//     });

//     listData = response.data.data.data;
//   } catch (err) {
//     console.log(err);
//   }

//   return { props: { listData } };
// };

export default List;
