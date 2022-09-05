import fs from 'fs';

export const getResultByTestId = (req, res)=>{
const { id } = req.params;
let rawdata = fs.readFileSync('test-results.json');
let testResults = JSON.parse(rawdata);
const selectedResults = testResults.filter((results)=> results.testId == id);
res.send(selectedResults);
}

export const getResultByTopictId = (req, res)=>{
const { id } = req.params;
let rawdata = fs.readFileSync('tests.json');
let testResults = JSON.parse(rawdata);
const selectedResults = testResults.filter(x => x.topicId == id && x.isActive == true);
res.send(selectedResults);
}

export const getStudents = (req, res)=>{
let rawdata = fs.readFileSync('students.json');
let students = JSON.parse(rawdata);
res.send(students);
}
    
