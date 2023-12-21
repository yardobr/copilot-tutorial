const sql = require('sqlite3').verbose();

const { getUsersOrdersStats } = require('./user-orders-repository');

let db = new sql.Database('/var/folders/orders.db', sql.OPEN_READWRITE | sql.OPEN_CREATE, async err => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');

    const result = await getUsersOrdersStats(db);
    db.close();
});
