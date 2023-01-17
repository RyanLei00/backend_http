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
    let course;
    if (req.body.name.length <= 3) {
        res.status(404).send("Please input a course that is greater than 3 characters long");
        return;
    }
    if (req.body.name.length > 3){
        course = {
            id: course.length + 1,
            name: req.body.name
        }
        res.status(200).send("Course successfully added.");
        console.log(course);
    }
    course.push(course);
    res.send(course);
});    

//here we need the specific id of the course we want to update
app.put('/api/courses/:id', (req,res)=>{
    //Write the code in order to look up the course, if not existing return a 404
            //otherwise 
                    //update the course
                    //return the updated course
});
    
app.delete('/api/courses/:id', (req,res)=>{
    //code the following logic
    //look up the course by id
        //return 404 if does not exist
        //delete the course by index HINT: use the indexOf() and splice() methods
        // return the response to the client the course that was deleted
});

app.delete('/api/courses/:id', (req,res)=>{
})