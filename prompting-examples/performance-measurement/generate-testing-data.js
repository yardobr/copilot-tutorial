const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/var/folders/orders.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, err => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');

    // Uncomment this to create the tables
    // db.serialize(() => {
    //     db.run("CREATE TABLE USERS (id INTEGER PRIMARY KEY, name TEXT NOT NULL)");
    //     db.run("CREATE TABLE PRODUCTS (id INTEGER PRIMARY KEY, name TEXT NOT NULL)");
    //     db.run(`CREATE TABLE ORDERS (
    //         id INTEGER PRIMARY KEY, 
    //         user_id INTEGER, 
    //         product_id INTEGER, 
    //         total DECIMAL(10, 2), 
    //         FOREIGN KEY (user_id) REFERENCES USERS(id), 
    //         FOREIGN KEY (product_id) REFERENCES PRODUCTS(id)
    //     )`);

    //     console.log('Tables created!');
    // });
    

    db.serialize(() => {
        console.log('Inserting random data...');
        insertRandomData();
        console.log('Random data inserted!');
        console.log('Done!');
        process.exit(0);
    });
});

const insertRandomData = () => {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivan", "Judy"];
    const products = ["Product1", "Product2", "Product3", "Product4", "Product5"];

    // Insert Users
    // for (let i = 0; i < 2000; i++) {
    //     const name = names[Math.floor(Math.random() * names.length)];
    //     db.run(`INSERT INTO USERS (name) VALUES (?)`, [name]);
    // }

    // Insert Products
    // for (let i = 0; i < 50; i++) {
    //     const name = products[Math.floor(Math.random() * products.length)];
    //     db.run(`INSERT INTO PRODUCTS (name) VALUES (?)`, [name]);
    // }

    // Insert Orders
    for (let i = 0; i < 100000; i++) {
        const userId = Math.floor(Math.random() * 2000) + 1;
        const productId = Math.floor(Math.random() * 50) + 1;
        const total = Math.random() * 1000;
        db.run(`INSERT INTO ORDERS (user_id, product_id, total) VALUES (?, ?, ?)`, [userId, productId, total.toFixed(2)]);
    }

    db.close();
};
