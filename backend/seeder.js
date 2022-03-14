import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    let createdUsers = await User.insertMany(users);
    products.forEach((element, index) => {
      products[index].user = createdUsers[Math.floor(Math.random()*createdUsers.length)];
    });
    await Product.insertMany(products);

    console.log('Data Added to DB'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log('Data Destoryed From DB'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destoryData();
} else {
  importData();
}
