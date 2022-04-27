exports.Query = {
	hello: () => {
		return ['World!!!'];
	},
	products: (parent, { filter }, { db }) => {
		const { products, reviews } = db;
		let filteredProducts = products;

		if (filter) {
			const { onSale, avgRating } = filter;
			if (onSale) {
				filteredProducts = filteredProducts.filter((product) => {
					return product.onSale;
				});
			}
			if ([1, 2, 3, 4, 5].includes(avgRating)) {
				filteredProducts = filteredProducts.filter((product) => {
					let sumRating = 0;
					let numOfReviews = 0;
					reviews.forEach((review) => {
						if (review.productId === product.id) {
							sumRating += review.rating;
							numOfReviews++;
						}
					});
					const avgProductRating = sumRating / numOfReviews;
					return avgProductRating >= avgRating;
				});
			}
		}

		return filteredProducts;
	},
	product: (parent, { id: productId }, { db }) => {
		return db.products.find((product) => product.id === productId);
	},
	categories: (parent, args, { db }) => db.categories,
	category: (parent, { id }, { db }) => {
		return db.categories.find((category) => category.id === id);
	},
};
