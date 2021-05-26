var db = require('./db-initializer');
const PRODUCTS_TABLE = 'products';

const returnAllProducts = (res, next) => {
    console.log("retrieving all product");
        db.all(`SELECT * FROM ${PRODUCTS_TABLE}`, function(err, rows) {
            if (err) {
                console.error("returnAllProducts " +err)
                next(err);
                return
            }
            if(!rows) res.json(JSON.parse(JSON.stringify(rows)))

            res.json(JSON.parse(JSON.stringify(rows)));
        });
}

const returnProduct = (res, next, id) => {
    console.log("retrieving product with id : " + id );
    db.all(`SELECT * FROM ${PRODUCTS_TABLE} WHERE id = ${id}`, function(err, row) {
        console.log(`rows in DB : ${row}`)
        if (err) {
            console.error("returnProduct " + err)
            next(err);
            return
        }

        if(!row) res.json(JSON.parse(JSON.stringify(row)))
    });
}

const createProduct = (res, next, product) => {
    var stmt = db.prepare(`INSERT INTO ${PRODUCTS_TABLE} (name, price) VALUES (?, ?)`);

    stmt.run(product.name, product.price)

    returnAllProducts(res, next)
}

const updateProduct = (res, next, id, product) => {
    let sql = `UPDATE ${PRODUCTS_TABLE} SET name = ?, price = ?  WHERE id = ?;`
    const data = [product.name, product.price, id];
    db.run(sql, data, function(err) {
        if (err) {
            console.error("updateProduct " + err)
            next(err);
            return
        }
        console.log(`Row(s) updated: ${this.changes}`);
    });

    returnAllProducts(res, next)
}

const deleteProduct = (res, next, id) => {
    let sql = `DELETE FROM ${PRODUCTS_TABLE} WHERE id = ?;`
    db.run(sql, id, function(err) {
        if (err) {
            console.error("deleteProduct " + err)
            next(err);
            return
        }
        console.log(`Row(s) deleted: ${this.changes}`);
    });

    returnAllProducts(res, next)
}

module.exports.returnAllProducts = returnAllProducts;
module.exports.returnProduct = returnProduct;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
