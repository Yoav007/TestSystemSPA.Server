import express from 'express';
import { getTests, getTestId, createTest, deleteTest, editTest } from '../controllers/tests.js'
import {getResultByTestId, getResultByTopictId, getStudents} from '../controllers/reports.js'

const router = express.Router();

router.get('/bytest/:id', getResultByTestId);

router.get('/testsByTopic/:id', getResultByTopictId);

router.get('/byStudent', getStudents);

export default router;
