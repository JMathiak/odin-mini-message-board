const { Client } = require('pg');
require('dotenv').config()
let d = new Date()
const SQL = `
CREATE TABLE IF NOT EXISTS messages ( 
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR ( 255 ),
    message VARCHAR ( 1000 ),
    date DATE
);
INSERT INTO messages (author, message, date)
VALUES
    ('Josh', 'I want to play wuwa!', current_timestamp);
`;

// const SQL = `
// INSERT INTO messages (author, message, date)
// VALUES
//     ('Josh', 'I want to play wuwa!', ${new Date()});
// `;

async function main(){
    console.log("seeding...")
    const client = new Client({
        connectionString:`${process.env.CONNECTLINK}`,
    });
    await client.connect()
    await client.query(SQL);
    await client.end();
    console.log('done')
}

main();
