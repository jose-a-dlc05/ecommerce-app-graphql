exports.Query = {
	hello: () => {
		return ['World!!!'];
	},
	products: (parent, args, { products }) => products,
	product: (parent, { id: productId }, { products }) => {
		return products.find((product) => product.id === productId);
	},
	categories: (parent, args, { categories }) => categories,
	category: (parent, { id }, context) => {
		return categories.find((category) => category.id === id);
	},
};
