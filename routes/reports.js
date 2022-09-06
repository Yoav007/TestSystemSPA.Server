import express from 'express';
import {getResultByTestId, getResultByTopictId, getStudents, getResultByStudentId} from '../controllers/reports.js'

const router = express.Router();

router.get('/bytest/:id', getResultByTestId);

router.get('/testsByTopic/:id', getResultByTopictId);

// router.get('/byStudent', getStudents);

router.get('/byStudent/:id', getResultByStudentId);

export default router;
