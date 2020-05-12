var Product = require('../models/product');

mongoose.connect('localhost:27017/shopping');
var products = [
    new Product({
        imagePath: 'https://www.washingtonian.com/wp-content/uploads/2020/02/iStock-1027572462-scaled-2048x1695.jpg',
        title: 'Alpukat',
        description: 'Alpukat Manis',
        price: 2000
    }),
    new Product({
        imagePath: 'https://www.washingtonian.com/wp-content/uploads/2020/02/iStock-1027572462-scaled-2048x1695.jpg',
        title: 'Alpukat',
        description: 'Alpukat Manis',
        price: 2000
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}