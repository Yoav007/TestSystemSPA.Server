import express from 'express';
import { createQuestion, getQuestions,getQuestionId, deleteQuestion, editQuestion, getQuestionsByTopicId} from '../controllers/questions.js';

const router = express.Router();
 
router.get('/', getQuestions);

router.post('/', createQuestion);

router.get('/:id', getQuestionId);

router.get('/byTopic/:id', getQuestionsByTopicId); 

router.delete('/:id', deleteQuestion);

router.put('/:id', editQuestion);

export default router;