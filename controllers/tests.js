import fs from 'fs';

export const getTests = (req, res)=>{
    let rawdata = fs.readFileSync('tests.json');
    let tests = JSON.parse(rawdata);
    res.send(tests);
}

export const getTestId = (req, res)=>{
    const { id } = req.params;
    let rawdata = fs.readFileSync('tests.json');
    let tests = JSON.parse(rawdata); 
    const selectedTest = tests.find((test)=>test.id == id);
     res.send(selectedTest);
 }

 export const getTestsByTopicId = (req, res)=>{
    const { id } = req.params; 
    let rawdata = fs.readFileSync('tests.json');
    let tests = JSON.parse(rawdata);
    const selectedTests = tests.filter((test)=>test.topicId == id);
     res.send(selectedTests);
  }


 export const createTest = (req, res)=>{
    const test = req.body;
    let rawdata = fs.readFileSync('tests.json');
    let tests = JSON.parse(rawdata);
    tests.push(test);
    fs.writeFileSync('tests.json',JSON.stringify(tests));
    res.send(`The Test ${test.id} was created`);
 }

 export const deleteTest = (req, res)=>{
    const { id } = req.params; 
    let rawdata = fs.readFileSync('tests.json');
    let tests = JSON.parse(rawdata);
    tests = tests.filter((test)=>test.id !== parseInt(id));
    fs.writeFileSync('tests.json',JSON.stringify(tests));
     res.send(`The Test with id ${id} has been removed from DB`);    
 }
 
 export const editTest = (req, res)=>{
    const { id } = req.params;
    const { updatedTest } = req.body;
    let rawdata = fs.readFileSync('tests.json');
    let tests = JSON.parse(rawdata);
    tests = tests.filter((test)=>parseInt(test.id) !== parseInt(id));
    tests.push(updatedTest); 
    fs.writeFileSync('tests.json',JSON.stringify(tests));
    
    res.send(`Test with the id ${id} has been updated`);
 }
