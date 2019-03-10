const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
})

module.exports = Category = mongoose.model('categories', CategorySchema)