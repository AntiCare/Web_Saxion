var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hbo-ict.sqlite3');
const PRODUCTS_TABLE = 'products';

const createTable = () => {
    db.run(`DROP TABLE IF EXISTS ${PRODUCTS_TABLE}`);
    db.run(`CREATE TABLE IF NOT EXISTS ${PRODUCTS_TABLE} (id INTEGER PRIMARY KEY, name TEXT NOT NULL, price INTEGER NOT NULL)`, insertRows);
    console.log("createTable products");
}

const insertRows =  () => {
    var stmt = db.prepare(`INSERT INTO ${PRODUCTS_TABLE} (name, price) VALUES (?, ?)`);

    const products = [
        {
            "name": "Fire TV Stick",
            "price": "32.99"
        },
        {
            "name": "Amazon Echo Dot",
            "price": "49.99"
        },
        {
            "name": "Amazon Echo, Black",
            "price": "149.99"
        },
        {
            "name": "Fire Tablet, 7",
            "price": "47.49"
        },
        {
            "name": "Kindle Paperwhitefff",
            "price": "104.99"
        }
    ]

    for (var i = 0; i < products.length; i++) {
        const product = products[i];
        stmt.run(product.name, product.price);
        console.log(`Added product ${JSON.stringify(product)}`);
    }
}

try {
    createTable();
} catch (e) {
    console.error(e)
}


module.exports = db;


