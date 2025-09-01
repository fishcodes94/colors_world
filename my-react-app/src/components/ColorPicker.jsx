// import React from 'react'
// import styles from "../components/ColorPicker.module.css"
// import  { useState } from "react";

// export const ColorPicker = () => {

//       const [color, setColor] = useState("#ff0000");
//   return (
//     <div className={styles.mainContainer}>


//         <h1>ColorPicker</h1>
//         <div className={styles.colorPickerContainer}>
//             <h2>Picker</h2>
//         <input className={styles.ColorPicker} type="color"  value={color} onChange={(e) => setColor(e.target.value)}></input>
//     </div>


//     </div>
//   )
// }
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import styles from "../components/ColorPicker.module.css"
import { HeaderColor } from "./HeaderColor";


export const ColorPicker = () => {
    const [color, setColor] = useState("#ff0000");
    const [showPicker, setShowPicker] = useState(true);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <HeaderColor />
            </div>
            <button onClick={() => setShowPicker(!showPicker)}>
                Pick Color
            </button>

            {showPicker && (
                <div className={styles.colorPickerContainer} >
                    <ChromePicker className={styles.pickerP} color={color} onChange={(c) => setColor(c.hex)} />
                </div>
            )}

            {/* <div style={{ marginTop: "100px" }}>
        Selected Color: <span className={styles.colorSpan}>{color}</span>
      </div> */}
        </div>
    );
};
