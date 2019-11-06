const fetch = require('node-fetch');

var url = `https://api.github.com/users/github`;

module.exports = {

    async consumerApi(){
        return await fetch( url );
    }
}