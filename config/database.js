const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bv5o7ejzi4yfpe6nmmvt-mysql.services.clever-cloud.com',
  user: 'u04yuoivggmh9sae',
  password: 'A1B9V8iHNtItrjSzXZuq',
  database: 'bv5o7ejzi4yfpe6nmmvt',
});

module.exports = pool.promise();