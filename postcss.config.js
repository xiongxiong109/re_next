// use posecss plugins
const autoprefixer = require('autoprefixer')

module.exports = {
    // autoprefixer
    plugins: [
        autoprefixer({
            browsers: ['Android > 4.0', 'IOS > 7']
        })
    ]    
}