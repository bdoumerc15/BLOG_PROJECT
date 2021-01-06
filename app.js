import bodyParser from 'body-parser'
import express from 'express'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    const file = `${process.cwd()}\\index.html`;
    res.sendFile(file);
})

app.listen(3000, () => console.log('Server listening on Port 3000'));