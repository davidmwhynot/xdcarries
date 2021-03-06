const Product = require('../src/models/Product');
const mongoose = require('mongoose');




/* XXX CONFIG XXX */
const { dbConnect } = require('../src/middleware');




/* XXX INIT XXX */
let products = [
	new Product({
		imagePath: 'https://picsum.photos/1200?image=1',
		title: 'Product 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		price: 9.99
	}),
	new Product({
		imagePath: 'https://picsum.photos/1200?image=100',
		title: 'Product 2',
		description: 'Officia pariatur quibusdam nesciunt eaque, omnis porro!',
		price: 19.99
	}),
	new Product({
		imagePath: 'https://picsum.photos/1200?image=200',
		title: 'Product 3',
		description: 'Natus fugiat dolorem culpa cupiditate, possimus inventore.',
		price: 4.99
	}),
	new Product({
		imagePath: 'https://picsum.photos/1200?image=300',
		title: 'Product 4',
		description: 'Esse at eum repellendus, dolore nemo inventore!',
		price: 19.99
	}),
	new Product({
		imagePath: 'https://picsum.photos/1200?image=400',
		title: 'Product 5',
		description: 'Dolores placeat obcaecati, cum ratione impedit ipsam!',
		price: 29.99
	}),
	new Product({
		imagePath: 'https://picsum.photos/1200?image=500',
		title: 'Product 6',
		description: 'Tempora sint suscipit veniam quae, officiis iure.',
		price: 24.99
	})
];




/* XXX MAIN XXX */
let count = 0;
for(i of products) {
	i.save((err, res) => {
		++count;
		if(count == products.length) mongoose.disconnect();
	});
}
