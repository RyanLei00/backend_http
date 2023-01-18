const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello there');
});

const courses = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Cybersecurity' },
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("This course with the given ID was not found");
        return
    }
    res.send(course);
})
app.listen(3000, () => {
    console.log('Listening on port 3000...')
})


//HTTP POST Requests//
app.post('/api/courses', (req, res) => {
    if (req.body.name.length <= 3) {
        res.status(404).send("Please input a course that is greater than 3 characters long");
    }
    else if (req.body.name.length > 3){
        const course = {
            id: courses.length + 1,
            name: req.body.name
        }
        courses.push(course);
        res.send(course);
    }
});    

app.put('/api/courses/:id', (req,res)=>{
    let original = courses.indexOf(req.body.id -1);
    if (original !== undefined) {
        const course = {
            id: req.body.id,
            name: req.body.name
        }
        courses[req.body.id -1] = course;
        res.send(course);
    }
    else if (original === undefined) {
        res.status(404).send("ID does not exist");
    }
});