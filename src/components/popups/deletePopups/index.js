import { apiCall } from '../../../api';
import styles from './DeletePopups.module.css';

const DeletePopups = ({
  listState,
  setListState,
  url,
  showDelPopup,
  setShowDelPopup,
  type,
  id,
  b,
  c,
}) => {
  const turnOffPopup = () => {
    setShowDelPopup(false);
  };

  const delData = async () => {
    const data = await apiCall('delete', `${url}/${id}`);

    //remove item from state
    listState = listState.filter((item) => item._id !== id);
    setListState(listState);

    return setShowDelPopup(false);
  };

  return (
    <div id={styles.deletePopup}>
      <div className={styles.popupContent}>
        <h1
          className={styles.heading}
        >{`Are you sure you want to delete this ${type}`}</h1>

        <p className={styles.show1}>
          <span className={styles.name}>ID:</span>
          <span className={styles.value} id="id">
            {id}
          </span>
        </p>
        <p className={styles.show1}>
          <span className={styles.value} id="b">
            {b}
          </span>
        </p>
        <p className={styles.show2}>
          <span className={styles.value} id="c">
            {c}
          </span>
        </p>

        <p>
          <span className={styles.delYesBtn} onClick={delData}>
            Yes
          </span>
          <span className={styles.delNoBtn} onClick={turnOffPopup}>
            No
          </span>
        </p>
      </div>
    </div>
  );
};

export default DeletePopups;
