const pool = require('./pool')

async function insertMessaage(author, message)
{
    await pool.query('INSERT INTO messages (author, message, date) VALUES ($1, $2, current_date)', [author, message])
}

async function getMessages()
{
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows
}

async function findMessage(id)
{
    const message  = await pool.query('SELECT message FROM messages WHERE id = ($1)', [id] )
    const author = await pool.query("SELECT author FROM messages WHERE id = ($1)", [id])
    const date = await pool.query("SELECT date FROM messages WHERE id = ($1)", [id])
    return {message: message.rows[0].message, author: author.rows[0].author, date: date.rows[0].date}
}

async function deleteMessage(id)
{
    await pool.query("DELETE FROM messages WHERE id = ($1)", [id])
}
module.exports = {
    getMessages,
    insertMessaage,
    findMessage,
    deleteMessage
}