const env = process.env.NODE_ENV || 'development';
console.log('environment', env);
const config = require('../../knexfile')['development'];
module.exports = require('knex')(config);
