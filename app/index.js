const sql = require('sqlite3').verbose();

const { getMostValuableUsers } = require('./user-orders-repository');

let db = new sql.Database('/var/folders/orders.db', sql.OPEN_READWRITE | sql.OPEN_CREATE, async err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');

    console.log('Getting users orders stats...');
    const result = await getMostValuableUsers(db, 100);

    console.log('Users orders stats retrieved!');
    console.log(result);

    db.close();
});
