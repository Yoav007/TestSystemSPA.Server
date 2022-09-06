
import fs from 'fs';

export const getQuestions = (req, res)=>{
let rawdata = fs.readFileSync('questions.json');
let questions = JSON.parse(rawdata);
res.send(questions);
}

export const getQuestionId = (req, res)=>{
    const { id } = req.params; 
    let rawdata = fs.readFileSync('questions.json');
    let questions = JSON.parse(rawdata);
    const selectedQuestion = questions.find((question)=>question.id == id);
     res.send(selectedQuestion);
 }

 export const getQuestionsByTopicId = (req, res)=>{
  const { id } = req.params; 
  let rawdata = fs.readFileSync('questions.json');
  let questions = JSON.parse(rawdata);
  const selectedQuestions = questions.filter((question)=>question.topicId != id);
   res.send(selectedQuestions);
}

export const createQuestion = (req, res)=>{
    const question = req.body;
    let rawdata = fs.readFileSync('questions.json');
    let questions = JSON.parse(rawdata);
    questions.push(question);
    fs.writeFileSync('questions.json',JSON.stringify(questions));
    res.send(`The question ${question.id} was added`) ;
}

export const deleteQuestion = (req, res)=>{
    const { id } = req.params; 
    let rawdata = fs.readFileSync('questions.json');
    let questions = JSON.parse(rawdata);
    questions = questions.filter((question)=>question.id !== id);
    fs.writeFileSync('questions.json',JSON.stringify(questions));
     res.send(`The question with id ${id} has been removed from DB`);
 }

 export const editQuestion = (req, res)=>{
    const { id } = req.params;
    const updatedQuestion = req.body; 
    let rawdata = fs.readFileSync('questions.json');
    let questions = JSON.parse(rawdata);
    questions = questions.filter((question)=>question.id !== id);
    questions.push(updatedQuestion); 
    fs.writeFileSync('questions.json',JSON.stringify(questions));
    res.send(`Question with the id ${id} has been updated`);
 }
