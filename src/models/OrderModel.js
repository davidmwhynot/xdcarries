/*

	title: OrderModel.js
	desc: Database model for an Order
	author: David Whynot
	email: davidmwhynot@gmail.com
	Project: TODO
	Created: 11/12/18
	Updated: 11/21/18

*/


/* XXX IMPORTS XXX */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;




/* XXX MAIN XXX */
const schema = new Schema({
	user: {
		type: String,
		required: true
	},
	cart: {
		type: Object,
		required: true
	},
	address: {
		type: Object,
		required: true
	},
	paymentId: {
		type: String,
		required: true
	}
});




/* XXX EXPORTS XXX */
module.exports = mongoose.model('Order', schema);
