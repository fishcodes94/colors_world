// import React from 'react'
// import axios from "axios";
// import styles from "../pages/ColorPalettes.module.css"
//  import { useEffect, useState } from "react";

// export const ColorPalettes = () => {
//   return (

//     <div className={styles.mainContainer}>
//     <h1 className={styles.mainPaletteHeader}>ColorPalettes</h1>
//     </div>
//   )
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styles from "../pages/ColorPalettes.module.css";
// import { HeaderColor } from '../components/HeaderColor';

// export const ColorPalettes = () => {
//     const [palettes, setPalettes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch palettes from backend
//     useEffect(() => {
//         const fetchPalettes = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/api/palettes'); // adjust URL if needed
//                 setPalettes(response.data);
//             } catch (err) {
//                 setError('Failed to fetch palettes');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPalettes();
//     }, []);

//     if (loading) return <p>Loading palettes...</p>;
//     if (error) return <p>{error}</p>;

//     return (






//         <div className={styles.mainContainer}>

//             <div className={styles.headerContainer}>
//                 <HeaderColor/>
//             </div>


//             <div className={styles.testingContainer}>
//                 {palettes.map(palette => (
//                     <div key={palette.id} className={styles.palette}>
//                         <h2 className={styles.paletteName}>{palette.name}</h2>
//                         <div className={styles.colorsContainer}>
//                             {palette.colors.map(color => (

//                                 <div
//                                     key={color.id}
//                                     className={styles.colorBox}
//                                     style={{ backgroundColor: color.hex }}
//                                 >
//                                     <div className={styles.colorInfo}>
//                                         <p className={styles.colorName}>{color.name}</p>
//                                         <p className={styles.colorHex}>{color.hex}</p>
//                                     </div>
//                                 </div>

//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     );
// };

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../pages/ColorPalettes.module.css";
import { HeaderColor } from '../components/HeaderColor';

export const ColorPalettes = () => {
    const [palettes, setPalettes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch palettes from backend
    useEffect(() => {
        const fetchPalettes = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/palettes`); // adjust URL if needed
             
                setPalettes(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch palettes');
            } finally {
                setLoading(false);
            }
        };

        fetchPalettes();
    }, []);

    if (loading) return <p>Loading palettes...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <HeaderColor />
            </div>

            <div className={styles.testingContainer}>
                {palettes.map(palette => (
                    <div key={palette.id} className={styles.palette}>
                        <h2 className={styles.paletteName}>{palette.name}</h2>
                        <div className={styles.colorsContainer}>
                            {palette.colors.slice(0, 3).map((color, index) => (
                                <div
                                    key={color?.id || index}
                                    className={styles.colorBox}
                                    style={{ backgroundColor: color?.hex || '#ffffff' }}
                                >
                                    <div className={styles.colorInfo}>
                                        <p className={styles.colorName}>{color?.name || 'N/A'}</p>
                                        <p className={styles.colorHex}>{color?.hex || '#ffffff'}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
