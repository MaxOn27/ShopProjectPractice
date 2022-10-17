const db = require("../utils/database");

class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        return db.execute(
            "INSERT INTO products (title, imageUrl, price, description) VALUES (?, ?, ?, ?)",
            [this.title, this.imageUrl, this.price, this.description],
            (error, result) => {
                if (error) {
                    console.log(error)
                }
            }
        );
    }

    static fetchAll() {
        return db.execute("SELECT * FROM products")
    }

    // static fetchById(id) {
    //     return db.execute("SELECT FROM products WHERE id = ?"
    //         , [id],
    //         (error, result) => {
    //             if(error) {
    //                 console.log(error);
    //             }
    //         })
    // }

    static deleteById(id) {
        return db.execute(
            "DELETE FROM products WHERE id = ?",[id],
            (error, result) => {
                if(error) {
                    console.log(error);
                }
            })
    }
}

module.exports = Product;