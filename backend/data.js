import bcrypt from 'bcryptjs';
const data = {
    users: [
       {
           name:'admin',
           email: 'admin@email.com',
           password:bcrypt.hashSync('1234', 8),
           isAdmin:true,
       },

       {
        name:'Joshua',
        email: 'praise@email.com',
        password:bcrypt.hashSync('1234', 8),
        isAdmin:false,
    },
    ],
    products: [
        {
        
            name: 'Hair',
            category: 'fashion',
            image: '/images/1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'nike',
            rating: 2.5,
            numReviews: 10,
            description: 'high quality product'
        },

        {
           
            name: 'Hanger',
            category: 'fashion',
            image: '/images/2.jpg',
            price: 120,
            countInStock: 4,
            brand: 'nike',
            rating: 5,
            numReviews: 13,
            description: 'high quality product'
        },

        {
         
            name: 'Hair rier',
            category: 'fashion',
            image: '/images/3.jpg',
            price: 50,
            countInStock: 7,
            brand: 'nike',
            rating: 2.5,
            numReviews: 11,
            description: 'high quality product'
        },

        {
            name: 'Hair drir',
            category: 'fashion',
            image: '/images/4.jpg',
            price: 120,
            countInStock: 1,
            brand: 'nike',
            rating: 1,
            numReviews: 16,
            description: 'high quality product'
        }, {
            name: 'Hair drer',
            category: 'fashion',
            image: '/images/6.jpeg',
            price: 120,
            countInStock: 10,
            brand: 'nike',
            rating: 1.5,
            numReviews: 40,
            description: 'high quality product'
        },
    ]
};

export default data;
