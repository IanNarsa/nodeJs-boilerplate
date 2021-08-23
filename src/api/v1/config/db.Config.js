import {Pool} from 'pg'


const client = new Pool({
    user: 'au',
    host: 'localhost',
    database: 'riset',
    password: 'au',
    port: 5432,
  })


module.exports = {
    client
}
