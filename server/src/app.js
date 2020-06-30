const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/status', (req, res) => {
	res.send({ message: 'hello world' });
});

app.listen(process.env.PORT || 8081, () => {
	console.log(`Server started on port`);
});
