var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    name: {
            type: String,
            default: ''
        }, 
    description: {
            type: String,
            default: ''
        },
    imgUrl: {
            type: String,
            default: ''
        },
    alt: {
            type: String,
            default: ''
        },
    category: {
            type: String,
            default: ''
        }
    
});
