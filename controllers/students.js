import fs from 'fs';

export const getStudents = (req, res)=>{
let rawdata = fs.readFileSync('students.json');
let students = JSON.parse(rawdata);
res.send(students);
}

export const getStudentsByTestId = (req, res)=>{
const { id } = req.params;
let rawdata = fs.readFileSync('students.json');
let students = JSON.parse(rawdata);
const selectedStudents = students.filter((student)=> student.testResults == id);
res.send(selectedStudents);
}