import { Fragment } from 'react';
import styles from './EditorPopup.module.css';
const EditorPopup = ({
  editorLoader,
  initialLoader,
  loadingIcon,
  popupMessage,
}) => {
  return (
    //set loader
    editorLoader || initialLoader ? (
      <div id={styles.popupEditor}>
        <div className={styles.relative}>{loadingIcon}</div>
        <p>{popupMessage}</p>
      </div>
    ) : (
      <Fragment></Fragment>
    )
  );
};

export default EditorPopup;
