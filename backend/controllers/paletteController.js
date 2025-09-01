import { getAllPalettes } from "../services/paletteService.js";

export const getPalettesController = async (req, res) => {
  try {
    const palettes = await getAllPalettes();
    res.json(palettes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch palettes" });
  }
};
