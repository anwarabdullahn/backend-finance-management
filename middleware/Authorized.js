const User = require('../models/User'),
	checkUserDeletedAt = (req, res, next) => {
		User.findById(req.user._id).then(
			(user) => (user.deletedAt ? res.status(400).json({
				success: false,
				msg: 'Your Account Blocked'
			}) : next())
		);
	};

module.exports = checkUserDeletedAt;