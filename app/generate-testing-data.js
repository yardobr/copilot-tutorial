const path = require('path');
const dotenv = require('dotenv').config({ path: 'env/.env' });
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, process.env.DB_PATH);
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

const run = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.run(query, params, function(err) {
            if (err) {
                console.log('Error running sql ' + query);
                console.log(err);
                reject(err);
            } else {
                resolve({ id: this.lastID });
            }
        });
    });
};

const createTables = async () => {
    await run("CREATE TABLE USERS (id INTEGER PRIMARY KEY, name TEXT NOT NULL)");
    await run("CREATE TABLE PRODUCTS (id INTEGER PRIMARY KEY, name TEXT NOT NULL)");
    await run(`CREATE TABLE ORDERS (
        id INTEGER PRIMARY KEY, 
        user_id INTEGER, 
        product_id INTEGER, 
        total DECIMAL(10, 2), 
        FOREIGN KEY (user_id) REFERENCES USERS(id), 
        FOREIGN KEY (product_id) REFERENCES PRODUCTS(id)
    )`);
    console.log('Tables created!');
};

const insertRandomData = async () => {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivan", "Judy"];
    const products = ["Product1", "Product2", "Product3", "Product4", "Product5"];

    // Insert Users
    for (let i = 0; i < 200; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        await run(`INSERT INTO USERS (name) VALUES (?)`, [name]);
    }

    // Insert Products
    for (let i = 0; i < 50; i++) {
        const name = products[Math.floor(Math.random() * products.length)];
        await run(`INSERT INTO PRODUCTS (name) VALUES (?)`, [name]);
    }

    // Insert Orders
    for (let i = 0; i < 500000; i++) {
        const userId = Math.floor(Math.random() * 200) + 1;
        const productId = Math.floor(Math.random() * 50) + 1;
        const total = Math.random() * 1000;
        await run(`INSERT INTO ORDERS (user_id, product_id, total) VALUES (?, ?, ?)`, [userId, productId, total.toFixed(2)]);
    }
};

const main = async () => {
    try {
        process.on('exit', () => {
            console.log('Closing database connection...');
            db.close();
            console.log('Database connection closed!');
        });
        // TODO: Uncomment the following line to create tables
        await createTables();
        console.log('Inserting random data...');
        await insertRandomData();
        console.log('Random data inserted!');
        console.log('Done!');
        db.close();
    } catch (err) {
        console.error(err.message);
    }
};

main();