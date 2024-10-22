const pool = require('/.pool')

async function insertMessaage(author, message)
{
    await pool.query('INSERT INTO messages (author, message, date) VALUES ($1, $2, current_timestamp)', [author, message])
}