var Products = require('../models/product');

var products = [
    new Products({
        imagePath: 'https://cdn1-production-images-kly.akamaized.net/JKk9tqvC1b2hZmB_z68iWYDaX3s=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2978823/original/023121200_1574827306-Pisang_ambon.jpg',
        title: 'Pisang Ambon',
        description: 'Pisang dari kebun orang, di ambil dengan sangat hati-hati dengan lirik kanan kiri',
        price: 8000
    }),
    new Products({
        imagePath: 'https://media.suara.com/pictures/653x366/2019/06/25/68123-ilustrasi-jambu-kristal-pixabaynew-abdul17.jpg',
        title: 'Jambu kristal',
        description: 'Dagangannya kang aceng, nitip dia sama web ini, katanya sih manis',
        price: 20000
    }),
    new Products({
        imagePath: 'https://img2.ralali.id/mediaflex/280/assets/img/Libraries/332089_DESTRA-AGRO-Bayam-Hijau-1-Kg_BBLUB1qpy5p0lJD0_1583237162.jpeg',
        title: 'Bayam',
        description: 'Bayam hijau biar anaknya jadi popeye',
        price: 5000
    }),
    new Products({
        imagePath: 'https://m.ayobandung.com/images-bandung/post/articles/2019/10/14/66788/cat-baby-4208534_960_720.jpg',
        title: 'anak kucing',
        description: 'Lah dari mana ini masuknya',
        price: 0
    }),
];