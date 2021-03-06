const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const ThemeSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		deletedAt: {
			type: Date,
			default: null
		}
	},
	{ timestamps: true }
);

module.exports = Theme = mongoose.model('themes', ThemeSchema);
