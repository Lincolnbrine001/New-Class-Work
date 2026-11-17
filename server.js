const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const PORT = 3005;

let cars = [
    {
        id: 1,
        Name: 'Toyota',
        location: 'New York',
        color: 'Red',
    },

    {
        id: 2,
        Name: 'Honda',
        location: 'Los Angeles',
        color: 'Blue',
    },

    {
        id: 3,
        Name: 'Ford',
        location: 'Chicago',
        color: 'Black',
    }

];

// GET endpoint to retrieve all cars
app.get('/api/cars', (req, res) => {
    res.json(cars);
});


//create
app.post("/api/cars", (req, res) =>{
    const car = req.body;
    cars.push(car);
    res.json(car);
});



//read
app.get("/api/cars/:id", (req, res)=>{
    const car = cars.find(s => s.id === Number(req.params.id));

    res.json(car);
});


//update
app.put("/api/cars/:id", (req, res) => {
    const car = cars.find(s => s.id === Number (req.params.id));
    car.color = req.body.color;
    res.json(car);
});


//patch
app.patch("/api/cars/:id", (req, res) =>{
    const car = cars.find(s => s.id === Number(req.params.id));
    Object.assign(car, req.body);
    res.json(car);
});



app.delete("/api/cars/:id", (req, res) => {
    const carId = Number(req.params.id);

    cars = cars.filter(s => s.id !== carId);

    res.json({
        message: "Car deleted successfully"
    });
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});