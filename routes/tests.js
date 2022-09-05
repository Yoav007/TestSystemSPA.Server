import express from 'express';
import { getTests, getTestId, createTest, deleteTest, editTest, getTestsByTopicId } from '../controllers/tests.js'
const router = express.Router();

router.get('/', getTests);

router.get('/:id', getTestId);

router.get('/testsByTopic/:id', getTestsByTopicId);

router.post('/', createTest);

router.delete('/:id', deleteTest);

router.put('/:id', editTest);

export default router;


