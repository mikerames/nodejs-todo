var mongoose = require('mongoose');

module.exports = mongoose.model('Athlete', {
    ranking: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    from: {
        type: String,
        default: ''
    },
    carprzmoney: {
        type: String,
        default: ''
    }
});
