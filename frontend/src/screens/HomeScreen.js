import axios from 'axios';
import Rating from '../components/Rating';
const HomeScreen = {
	render: async () => {
		const response = await axios({
			url: 'http://localhost:5000/api/products',
			header: {
				'Content-Type': 'application/json',
			},
		});
		if (!response || response.statusText !== 'OK') {
			return `<div>Error in getting data</div>`;
		}
		const products = await response.data;
		return `
        <ul class="products">
            ${products
				.map(
					(product) => `
				<li>
					<div class="product">
						<div class="product-wrap-image">
						<a href="/#/product/${product._id}">
							<img src="${product.image}" alt="${product.name}"/
						></a>
						</div>
						<div class="product-name">
							<a href="/#/product/${product._id}">${product.name}
							</a>
						</div>
						
						<div class="product-rating">
							${Rating.render({
								value: product.rating,
								text: `${product.numberReviews} reviews`,
							})}
						</div>
						<div class="product-brand">Keyboard ${product.brand}</div>
						<div class="product-price">$${product.price}</div>
					</div>
				</li>`,
				)
				.join('\n')}
        `;
	},
};

export default HomeScreen;
