const fs = require('fs');
const app = require('express')();
const cors = require('cors');
app.use(cors());

const PORT = 3000;
const data = JSON.parse(fs.readFileSync('data.json'));

Object.keys(data).map(key => {
    console.log(`Setting up route /${key}`);
    app.get(`/${key}`, (req, res) => {
        console.log(`Requested key /${key}`);
        res.status(200).json(data[key])
    });
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})