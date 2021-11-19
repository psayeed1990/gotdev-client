import { useState } from 'react';
import hideEditorOptions from '../../../utils/eventFunctions/hideEditorOptions';
import removeEditorBorder from '../../../utils/eventFunctions/removeEditorOptions';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './MediaPopup.module.css';
const MediaPopup = ({
  showMediaPopupSet,
  showMediaPopup,
  setRightMenu,
  keepSelected,
  keepSelectedSet,
}) => {
  const [message, setMessage] = useState('');

  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  const closeFunction = (e) => {
    e.preventDefault();
    showMediaPopupSet(false);
    setRightMenu(false);
  };

  const saveDesign = (e) => {
    e.preventDefault();

    // 1. Upload images before save
    // 2. delete images from there
    // 3. Everytime a upload event occurs, save the whole page
    // 4. On close, readd the eventlisteners again
    // 5. On close, add the image to the place

    const add = document.getElementById('wp364-add-media');
    const width = document.getElementById('wp364-width');
    const height = document.getElementById('wp364-height');

    const content = document.createElement('img');
    content.setAttribute('src', `${URL.createObjectURL(add.files[0])}`);
    content.setAttribute('width', width.value);
    content.setAttribute('height', height.value);

    selectedElement.appendChild(content);
    showMediaPopupSet(false);
    setRightMenu(false);
  };
  return (
    <div className={styles.designer}>
      <label>
        Add photo or video
        <input type="file" id="wp364-add-media" />
      </label>

      <p>
        Width: <input type="text" id="wp364-width" />
      </p>
      <p>
        Height: <input type="text" id="wp364-height" value="auto" />
      </p>

      {message}
      <button onClick={saveDesign}>Upload</button>
      <button onClick={closeFunction}>Close</button>
    </div>
  );
};

export default MediaPopup;
