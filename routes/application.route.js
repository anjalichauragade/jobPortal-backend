import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
import { singleUpload } from "../middlewares/mutler.js"; // added

const router = express.Router();

// updated: use POST and upload middleware
router.route("/apply/:id").post(isAuthenticated, singleUpload, applyJob);

router.route("/get").get(isAuthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicants);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;
