import express from 'express';
import { createTopic, getTopics,getTopicId, deleteTopic, editTopic} from '../controllers/topics.js';
const router = express.Router();

router.get('/', getTopics);

router.post('/', createTopic);

router.get('/:id', getTopicId);

router.delete('/:id', deleteTopic);

router.put('/:id', editTopic); 

export default router;