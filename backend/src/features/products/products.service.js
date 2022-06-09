class Service {

    async get() {
        try {
           const products = [
               {
                   productId: 1,
                   productName: "Apple Watch 2019 Series",
                   price: 1599.99
               },
               {
                   productId: 2,
                   productName: "Macbook Pro 2017 15'",
                   price: 3599.99
               },
               {
                   productId: 3,
                   productName: "Macbook Air M1 2020 13'",
                   price: 4500.00
               }
           ]
           return { products }
        } catch (error) {
            throw error;
        };
    };

};

module.exports = Service;