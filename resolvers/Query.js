exports.Query = {
	hello: () => {
		return ['World!!!'];
	},
	products: (parent, { filter }, { products, reviews }) => {
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
	product: (parent, { id: productId }, { products }) => {
		return products.find((product) => product.id === productId);
	},
	categories: (parent, args, { categories }) => categories,
	category: (parent, { id }, { categories }) => {
		return categories.find((category) => category.id === id);
	},
};
