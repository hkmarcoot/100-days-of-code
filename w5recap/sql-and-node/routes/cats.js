import express from "express";
const router = express.Router();

import {getCats, getCatById, getCatsByName} from "../models/cats.js";

router.get("/", async (req, res) => {

    //Example: localhost:3000/cats?name=poppy
    const name = req.query.name;

    if (name) {
    const searchResults = await getCatsByName(name);
    res.json({
        success: true,
        message: `Searched names for ${name}`,
        payload: searchResults,
    });
        return;
    }

    //Example: localhost:3000/cats/
    const allCats = await getCats();

    res.json({ success: true, message: `all cats`, payload: allCats });
});

// GET specific cat by id
router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const requestedCat = await getCatById(id);
    res.json({
      success: true,
      message: `Found cat ${id}`,
      payload: requestedCat,
    });
});

export default router;