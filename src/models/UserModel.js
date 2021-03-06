/*

	title: User.js
	desc: Database model for User login credentials
	author: David Whynot
	email: davidmwhynot@gmail.com
	Project: TODO
	Created: 11/12/18
	Updated: 11/22/18

*/


/* XXX IMPORTS XXX */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;




/* XXX MAIN XXX */
const schema = new Schema({
  email: {
		type: String,
		required: true
	},
  password: {
		type: String,
		required: true
	}
});




/* XXX EXPORTS XXX */
module.exports = mongoose.model('User', schema);
