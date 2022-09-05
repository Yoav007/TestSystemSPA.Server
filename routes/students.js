import express from 'express';
import {getStudents, getStudentsByTestId} from '../controllers/students.js'

const router = express.Router();

router.get('/', getStudents); 

router.get('/ByTestId', getStudentsByTestId);

export default router;