exports.Query = {
	hello: () => {
		return ['World!!!'];
	},
	products: () => {
		return products;
	},
	product: (parent, { id: productId }, context) => {
		const product = products.find((product) => product.id === productId);
		if (!product) return null;
		return product;
	},
	categories: () => {
		return categories;
	},
	category: (parent, { id }, context) => {
		return categories.find((category) => category.id === id);
	},
};
