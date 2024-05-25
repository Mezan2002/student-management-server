import express from 'express';
import { UserControllers } from './user.controller';

// init the router
const router = express.Router();

// making routes
router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;
