const mongoose = require('mongoose')

// Mongoose schema to define the structure of the model
const articleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title.']
        },
        content: {
            type: String, 
            required: [true, 'Please add your content.']
        }
    }
)

const ArticleModel = mongoose.model('Article', articleSchema)

export { ArticleModel }