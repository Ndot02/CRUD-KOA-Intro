import Router from "@koa/router";
import {
  showAllStudents,
  createNewStudent,
  updateExistingStudent,
  removeStudent,
  showStudentById,
} from "../controllers/studentController.js";

const router = new Router();

router.get("/students", showAllStudents);
router.get("/students/:id", showStudentById);
router.post("/students", createNewStudent);
router.put("/students/:id", updateExistingStudent);
router.delete("/students/:id", removeStudent);

export default router;
