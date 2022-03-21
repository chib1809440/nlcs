const express = require('express');
const cors = require('cors');
const data = require('./data.js');
const app = express();
app.use(cors());

app.get('/api/products', (req, res, next) => {
	res.send(data.products);
});
app.get('/api/products/:id', (req, res, next) => {
	var id = req.params.id;
	const product = data.products.find((x) => x._id === id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: 'Product not found' });
	}
});
app.get('/api/cart/:id', (req, res, next) => {});
const port = 5000;
app.listen(port, () => {
	console.log('Server is running at http://localhost:' + port);
});
