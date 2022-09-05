// let topics = [[
//     {
//       name: "Math",
//       id: 1
//     },
//     {
//       name: "Trivia",
//       id: 2
//     }
//   ]];
import fs from 'fs';

export const getTopics = (req, res)=>{
    let rawdata = fs.readFileSync('topics.json');
    let topics = JSON.parse(rawdata);
    res.send(topics);
}

export const getTopicId = (req, res)=>{
    const { id } = req.params; 
    let rawdata = fs.readFileSync('topics.json');
    let topics = JSON.parse(rawdata);
    const selectedTopic = topics.find((topic)=>topic.id == id);
     res.send(selectedTopic);
 }

export const createTopic = (req, res)=>{
    const topic = req.body;
    let rawdata = fs.readFileSync('topics.json');
    let topics = JSON.parse(rawdata);
    topics.push(topic);
    res.send(`The Topic ${topic.id} was added`);
}

export const deleteTopic = (req, res)=>{
    const { id } = req.params; 
    let rawdata = fs.readFileSync('topics.json');
    let topics = JSON.parse(rawdata);
    topics = topics.filter((topic)=>topic.id !== parseInt(id));
    fs.writeFileSync('topics.json',JSON.stringify(topics));
     res.send(`The Topic with id ${id} has been removed from DB`);
 }

 export const editTopic = (req, res)=>{
    const { id } = req.params;
    const { updatedTopic } = req.body;
    let rawdata = fs.readFileSync('topics.json');
    let topics = JSON.parse(rawdata);
    topics = topics.filter((topic)=>parseInt(topic.id) !== parseInt(id));
    topics.push(updatedTopic); 
    fs.writeFileSync('topics.json',JSON.stringify(topics));
   
    res.send(`Topic with the id ${id} has been updated`);
 }
