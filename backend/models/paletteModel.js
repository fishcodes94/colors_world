import pool from '../config/db.js';


export const getAllPalette= async()=>{
     const result = await pool.query(`
    SELECT 
      p.id AS palette_id, 
      p.name AS palette_name,
      c.id AS color_id,
      c.name AS color_name,
      c.hex AS color_hex
    FROM palettes p
    JOIN palette_colors pc ON p.id = pc.palette_id
    JOIN colors c ON c.id = pc.color_id
    ORDER BY p.id;
  `);

   return result.rows;
 
}