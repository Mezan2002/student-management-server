import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.get('/get-students', StudentControllers.getAllStudents);
router.get('/get-student/:student_id', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
