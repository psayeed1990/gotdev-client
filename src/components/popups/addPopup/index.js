import { useState } from 'react';
import hideEditorOptions from '../../../utils/eventFunctions/hideEditorOptions';
import removeEditorBorder from '../../../utils/eventFunctions/removeEditorOptions';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './AddPopup.module.css';
const AddPopup = ({
  showAddPopupSet,
  showAddPopup,
  setRightMenu,
  keepSelected,
  keepSelectedSet,
}) => {
  const [message, setMessage] = useState('');

  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  const closeFunction = (e) => {
    e.preventDefault();
    showAddPopupSet(false);
    setRightMenu(false);
  };

  const saveDesign = (e) => {
    e.preventDefault();
    const add = document.getElementById('wp364-add');
    const content = document.getElementById('wp364-content').value;
    const link = document.getElementById('wp364-link').value;

    if (add.value !== 'select') {
      if (content.length > 0) {
        const newElement = document.createElement(`${add.value}`);
        newElement.innerHTML = content;
        if (add.value === 'a') {
          newElement.href = link;
        }
        //add event listener
        //mouse enter and leave functions
        newElement.addEventListener('mouseover', (e) => {
          //remove other class of 'editor-border'
          //get the parents
          // let temporayElement = element;
          // const parents = [];
          // while (temporayElement) {
          //   parents.unshift(temporayElement);
          //   temporayElement = temporayElement.parentNode;
          // }
          const otherEditorBorder = doc.getElementsByClassName('editor-border');

          for (var j = 0; j < otherEditorBorder.length; j++) {
            otherEditorBorder[j].classList.remove('editor-border');
          }
          e.currentTarget.classList.add('editor-border');
        });
        newElement.addEventListener('mouseleave', (e) => {
          if (keepSelected) {
            // do nothing
          } else {
            e.currentTarget.classList.remove('editor-border');
          }
        });

        //hide editor options
        newElement.addEventListener('click', hideEditorOptions);

        if (doc.addEventListener) {
          newElement.addEventListener(
            'contextmenu',
            (e) => {
              e.preventDefault();
              window.event.returnValue = false;
              const elm = e.currentTarget;

              // remove all the effects added by this functions before starting again
              removeEditorBorder();

              //Now start adding all the functions to the right click
              //add editor class to the one
              elm.classList.add('editor-border');
              //turn on keep selected border
              keepSelectedSet(true);
              setRightMenu(true);
            },
            false
          );
        } else {
          newElement.attachEvent('oncontextmenu', (e) => {
            e.preventDefault();
            window.event.returnValue = false;
            const elm = e.currentTarget;

            // remove all the effects added by this functions before starting again
            removeEditorBorder();

            //Now start adding all the functions to the right click
            //add editor class to the one
            elm.classList.add('editor-border');
            keepSelectedSet(true);
            setRightMenu(true);
          });
        }

        selectedElement.appendChild(newElement);
      } else {
        return setMessage('Empty content');
      }
    }
    showAddPopupSet(false);
    setRightMenu(false);
  };
  return (
    <div className={styles.designer}>
      <p>
        <select id="wp364-add">
          <option value="select" disabled selected>
            Select
          </option>
          <option value="h1">Heading Largest</option>
          <option value="h2">Heading 2nd Largest</option>
          <option value="h3">Heading middle size</option>
          <option value="h1">Heading smaller</option>
          <option value="h1">Little heading</option>
          <option value="h1">Very Little Heading</option>
          <option value="h1">Tiny Heading</option>
          <option value="p">Paragraph</option>
          <option value="em">Italian Text</option>
          <option value="span">Span in Paragraph</option>
          <option value="address">Address</option>
          <option value="label">Label</option>
          <option value="button">Button</option>
          <option value="a">Link</option>
          <option value="b">Bold</option>
          <option value="i">Italic</option>
          <option value="strong">Strong</option>
          <option value="sup">Super Text</option>
          <option value="mark">Highlight</option>
          <option value="del">Deprecated text</option>
          <option value="ins">Inserted Text</option>
          <option value="sub">Sub text</option>
          <option value="blockquote">Block Quote</option>
          <option value="abbr">Abbreavation</option>
          <option value="q">Quotation</option>
          <option value="tr">Table row</option>
          <option value="th">Table Heading</option>
          <option value="td">Table Data Cell</option>
          <option value="dt">DT Description of list</option>
          <option value="dd">DD Description of list</option>
          <option value="li">List line</option>
        </select>
      </p>
      <p>
        Content:
        <textarea id="wp364-content"></textarea>
      </p>
      <p>
        Link (for links only):
        <textarea id="wp364-link"></textarea>
      </p>
      {message}
      <button onClick={saveDesign}>Save</button>
      <button onClick={closeFunction}>Close</button>
    </div>
  );
};

export default AddPopup;
