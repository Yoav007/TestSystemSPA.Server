import express from 'express';
import bodyParser from 'body-parser';
import questionsRoutes from './routes/questions.js';
import testsRoutes from './routes/tests.js';
import topicsRoutes from './routes/topics.js';
import reportsRoutes from './routes/reports.js';
import cors from 'cors';

const app = express();
const PORT = 4040; 
app.use(cors());

app.use(bodyParser.json({type: 'application/json'}));  

app.listen(PORT, ()=> console.log(`Server is Running on port: http://localhost:${PORT}`));

function logger (req, res, next){
    console.log(`[${Date.now()}] ${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get('/', (req, res)=>{res.send('Hello from Homepage!');
})

app.use ('/questions', questionsRoutes);

app.use ('/tests', testsRoutes);

app.use ('/topics', topicsRoutes);

app.use ('/reports', reportsRoutes); 
