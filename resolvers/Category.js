const { products } = require('../db');

exports.Category = {
	products: (parent, args, context) => {
		const { id: categoryId } = parent;
		return products.filter((product) => product.categoryId === categoryId);
	},
};
