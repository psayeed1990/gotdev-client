import { useEffect, useState } from 'react';
import getAllFonts from '../../../utils/getAllFonts';
import innerDoc from '../../../utils/innerDocFunction';
import styles from './DesignPopup.module.css';
const DesignPopup = ({ showDesignPopupSet, showDesignPopup, setRightMenu }) => {
  const [fonts, fontsSet] = useState([]);
  const [noChange, noChangeSet] = useState({
    bgcolor: false,
    txtcolor: false,
    bordercolor: false,
  });
  const { bgcolor, txtcolor, bordercolor } = noChange;
  const doc = innerDoc();
  const selectedElement = doc.getElementsByClassName('editor-border')[0];

  useEffect(() => {
    if (showDesignPopup) {
      /***********************************************************
       ***start bg and text color***
       ***********************************************************/
      const colorBgInput = document.getElementById('wp364-bg-color');
      const colorTxtInput = document.getElementById('wp364-text-color');
      const colorBdrInput = document.getElementById('wp364-border-color');
      //set ddefault color

      const bgColor = getComputedStyle(selectedElement).backgroundColor;
      const textColor = getComputedStyle(selectedElement).color;
      const borderColor = getComputedStyle(selectedElement).borderColor;

      const rgb2hex = (rgb) => {
        try {
          return `#${rgb
            .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
            .slice(1)
            .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
            .join('')}`;
        } catch (err) {
          return false;
        }
      };

      console.log(bgColor, textColor, borderColor);
      //hex convert bg color
      if (rgb2hex(borderColor)) {
        colorBdrInput.value = rgb2hex(borderColor);
      } else {
        noChangeSet({ ...noChange, bordercolor: true });
      }

      //hex convert border color
      if (rgb2hex(bgColor)) {
        colorBgInput.value = rgb2hex(bgColor);
      } else {
        noChangeSet({ ...noChange, bgcolor: true });
      }

      //hex convert text color
      if (rgb2hex(textColor)) {
        colorTxtInput.value = rgb2hex(textColor);
      } else {
        noChangeSet({ ...noChange, txtcolor: true });
      }

      // input handler bg color
      colorBgInput.addEventListener('input', () => {
        colorBgInput.style.backgroundColor = colorBgInput.value;

        if (txtcolor && bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: true,
            bgcolor: false,
            bordercolor: true,
          });
        } else if (!txtcolor && bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: true,
          });
        } else if (txtcolor && !bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: true,
            bgcolor: false,
            bordercolor: false,
          });
        } else {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: false,
          });
        }
      });

      //input handler text color
      colorTxtInput.addEventListener('input', () => {
        colorTxtInput.style.backgroundColor = colorTxtInput.value;
        if (bgcolor && bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: true,
            bordercolor: true,
          });
        } else if (!bgcolor && bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: true,
          });
        } else if (bgcolor && !bordercolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: true,
            bordercolor: false,
          });
        } else {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: false,
          });
        }
      });

      //input handler border color
      colorTxtInput.addEventListener('input', () => {
        colorTxtInput.style.backgroundColor = colorTxtInput.value;
        if (bgcolor && txtcolor) {
          noChangeSet({
            ...noChange,
            txtcolor: true,
            bgcolor: true,
            bordercolor: false,
          });
        } else if (!bgcolor && txtcolor) {
          noChangeSet({
            ...noChange,
            txtcolor: true,
            bgcolor: false,
            bordercolor: false,
          });
        } else if (bgcolor && !txtcolor) {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: true,
            bordercolor: false,
          });
        } else {
          noChangeSet({
            ...noChange,
            txtcolor: false,
            bgcolor: false,
            bordercolor: false,
          });
        }
      });

      /***********************************************************
       ***end bg and text color***
       ***********************************************************/

      /***********************************************************
       ***start font families how***
       ***********************************************************/
      const fontFamily = getComputedStyle(selectedElement).fontFamily;
      //font size
      // const fontSizeValue = getComputedStyle(selectedElement).fontSize;
      // fontSize(fontSizeValue);

      /***********************************************************
       ***end font families show***
       ***********************************************************/
    }
  }, [showDesignPopup]);

  const closeFunction = (e) => {
    e.preventDefault();
    showDesignPopupSet(false);
    setRightMenu(false);
  };

  const saveDesign = (e) => {
    e.preventDefault();
    console.log(bgcolor, txtcolor);
    if (!bgcolor) {
      selectedElement.style.backgroundColor = document.getElementById(
        'wp364-bg-color'
      ).value;
    }

    if (!txtcolor) {
      selectedElement.style.color = document.getElementById(
        'wp364-text-color'
      ).value;
    }

    if (!bordercolor) {
      selectedElement.style.borderColor = document.getElementById(
        'wp364-border-color'
      ).value;
    }

    //font family
    const fontFamilyValue = document.getElementById('wp364-font-family');
    if (fontFamilyValue.value === 'select') {
      // do nothing
    } else {
      selectedElement.style.fontFamily = fontFamilyValue.value;
    }

    //font-size:
    const fontSize = document.getElementById('wp364-font-size');
    if (fontSize.value > 0) {
      selectedElement.style.fontSize = fontSize.value;
    }

    //font weight
    const fontWeightValue = document.getElementById('wp364-font-weight');
    if (fontWeightValue.value !== 'select') {
      selectedElement.style.fontWeight = fontWeightValue.value;
    }

    //border width
    const borderWidth = document.getElementById('wp364-border-width');
    if (borderWidth.value > 0) {
      selectedElement.style.borderWidth = borderWidth.value;
    }

    //list style

    const listStyleValue = document.getElementById('wp364-list-style');
    if (listStyleValue.value !== 'select') {
      selectedElement.style.listStyleType = listStyleValue.value;
    }

    const textDecorationValue = document.getElementById(
      'wp364-text-decoration'
    );
    if (textDecorationValue.value !== 'select') {
      selectedElement.style.textDecoration = textDecorationValue.value;
    }

    //border style
    const borderStyle = document.getElementById('wp364-border-style');
    if (borderStyle.value !== 'select') {
      selectedElement.style.borderStyle = borderStyle.value;
    }

    noChangeSet({ bordercolor: false, txtcolor: false, bordercolor: false });
    showDesignPopupSet(false);
    setRightMenu(false);
  };

  useEffect(() => {
    const allFonts = getAllFonts();
    console.log(allFonts);
    fontsSet(allFonts);
  }, []);

  return (
    <div className={styles.designer}>
      <p>
        Background color:
        <input type="color" id="wp364-bg-color" className={styles.colorInput} />
      </p>
      <p>
        Font color:
        <input
          type="color"
          id="wp364-text-color"
          className={styles.colorInput}
        />
      </p>
      <p>
        Font Family:
        <select id="wp364-font-family">
          <option value="select" selected disabled>
            Select
          </option>
          {fonts.map((font) => {
            return <option value={font}>{font}</option>;
          })}
        </select>
      </p>
      <p>
        Font Size:
        <input type="number" id="wp364-font-size" defaultValue={0} />
        px
      </p>
      <p>
        Font Weight:
        <select id="wp364-font-weight">
          <option value="select" selected disabled></option>
          <option value="thin">thin</option>
          <option value="normal">normal</option>
          <option value="bold">bold</option>
          <option value="bolder">bolder</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>
      </p>
      <p>
        border color:
        <input
          type="color"
          id="wp364-border-color"
          className={styles.colorInput}
        />
      </p>
      <p>
        border width:
        <input type="number" id="wp364-border-width" defaultValue={0} />
        px
      </p>
      <p>
        Border Style:
        <select id="wp364-border-style">
          <option value="select" selected disabled></option>
          <option value="none">none</option>
          <option value="dotted">dotted</option>
          <option value="dashed">Dashed</option>
          <option value="solid">Solid</option>
        </select>
      </p>
      <p>
        Text Decoration:
        <select id="wp364-text-decoration">
          <option value="select" selected disabled></option>
          <option value="none">none</option>
          <option value="overline">overline</option>
          <option value="line-through">line-through</option>
          <option value="underline">underline</option>
          <option value="overline underline">overline underline</option>
          <option value="initial">initial</option>
          <option value="inherit">inherit</option>
        </select>
      </p>
      <p>
        List Style:
        <select id="wp364-list-style">
          <option value="select" selected disabled></option>
          <option value="circle">circle</option>
          <option value="disc">disc</option>
          <option value="square">square</option>
          <option value="none">none</option>
          <option value="inherit">inherit</option>
          <option value="decimal">decimal</option>
          <option value="decimal-leading-zero">decimal-leading-zero</option>
          <option value="upper-roman">upper-roman</option>
          <option value="lower-roman">lower-roman</option>
        </select>
      </p>
      <button onClick={saveDesign}>Save</button>
      <button onClick={closeFunction}>Close</button>
    </div>
  );
};

export default DesignPopup;
