import express from "express";
import { searchPerson, serachMovie, serachTv } from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", serachMovie);
router.get("/tv/:query", serachTv);

export default router;