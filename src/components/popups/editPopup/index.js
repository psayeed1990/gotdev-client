import { useEffect, useState } from 'react';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './EditPopup.module.css';

const EditPopup = ({ setRightMenu, showEditPopup, showEditPopupSet }) => {
  const [content, contentSet] = useState('');
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];
  useEffect(() => {
    contentSet(selectedElement.innerHTML);
  }, []);

  const closeFunction = (e) => {
    e.preventDefault();
    showEditPopupSet(false);
    setRightMenu(false);
  };

  const saveDesign = (e) => {
    e.preventDefault();
    selectedElement.innerHTML = document.getElementById('content').value;
    showEditPopupSet(false);
    setRightMenu(false);
  };
  return (
    <div className={styles.designer}>
      <p>
        <textarea
          cols="30"
          rows="8"
          id="content"
          value={content}
          onChange={(e) => contentSet(e.target.value)}
        ></textarea>
      </p>
      <button onClick={saveDesign}>Save</button>
      <button onClick={closeFunction}>Close</button>
    </div>
  );
};

export default EditPopup;
