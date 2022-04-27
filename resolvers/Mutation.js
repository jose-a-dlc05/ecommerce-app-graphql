const { v4: uuid } = require('uuid');

exports.Mutation = {
	addCategory: (parent, { input }, { db }) => {
		const newCategory = {
			id: uuid(),
			name: input.name,
		};

		db.categories.push(newCategory);

		return newCategory;
	},
	addProduct: (parent, { input }, { db }) => {
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

		db.products.push(newProduct);

		return newProduct;
	},
	addReview: (parent, { input }, { db }) => {
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

		db.reviews.push(newReview);

		return newReview;
	},
	deleteCategory: (parent, { id }, { db }) => {
		db.categories = db.categories.filter((category) => category.id !== id);
		db.products = db.products.map((product) => {
			if (product.categoryId === null)
				return {
					...product,
					categoryId: null,
				};
			else return product;
		});
		return true;
	},
};
