const { consumerApi } = require('./consumer');


async function main() {

    const result = consumerApi();

    var jsonResult = await result.then(res => { return res; } );

    console.log( jsonResult.status );
    
}


main();



