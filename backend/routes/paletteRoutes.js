import express from "express";
import { getPalettesController } from "../controllers/paletteController.js";

const router = express.Router();

// GET /api/palettes
router.get("/", getPalettesController);

export default router;