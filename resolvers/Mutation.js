const { v4: uuid } = require('uuid');

exports.Mutation = {
	addCategory: (parent, { input }, { categories }) => {
		const newCategory = {
			id: uuid(),
			name: input.name,
		};

		categories.push(newCategory);

		return newCategory;
	},
	addProduct: (parent, { input }, { products }) => {
		const { name, description, quantity, price, image, onSale, categoryId } =
			input;
		const newProduct = {
			id: uuid(),
			name,
			description,
			quantity,
			price,
			image,
			onSale,
			categoryId,
		};

		products.push(newProduct);

		return newProduct;
	},
	addReview: (parent, { input }, { reviews }) => {
		const { title, comment, rating, productId } = input;
		const timeElapsed = Date.now();
		const today = new Date(timeElapsed);
		const newReview = {
			id: uuid(),
			date: today.toISOString().split('T')[0],
			title,
			comment,
			rating,
			productId,
		};

		reviews.push(newReview);

		return newReview;
	},
};
