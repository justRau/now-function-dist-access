// const logger = require('pino')();
const fs = require('fs');

module.exports = (request, response) => {
    let responseData = [];

    const dirs = [
        '.',
        'api',
        'src',
        'dist',
    ];
    dirs.forEach((dir) => {
        console.log(dir);
        try {
            responseData.push({
                "dir": dir,
                "content": fs.readdirSync(dir),
            });
        } catch (e) {
            responseData.push({
                "dir": dir,
                "exception": e.message,
            });
        }
    })

    response.end(JSON.stringify(responseData));
}


