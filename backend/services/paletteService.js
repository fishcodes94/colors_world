import { getAllPalette } from "../models/paletteModel.js";

export const getAllPalettes = async () => {
  const rows = await getAllPalette();  // <-- use the correct function name

  const palettesMap = {};
  rows.forEach(row => {
    if (!palettesMap[row.palette_id]) {
      palettesMap[row.palette_id] = {
        id: row.palette_id,
        name: row.palette_name,
        colors: []
      };
    }
    palettesMap[row.palette_id].colors.push({
      id: row.color_id,
      name: row.color_name,
      hex: row.color_hex
    });
  });

  return Object.values(palettesMap);
};
