import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
router.get('/get-students', StudentControllers.getAllStudents);
router.get('/get-student/:student_id', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
