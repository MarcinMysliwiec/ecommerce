import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('qwe', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: '1sadasdsdd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: '2saasddsdd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: '22adasdasdd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: '3sadadassd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: '4adas43adsdd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: '5sadasdd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: '6sa1dasdasd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: 'da1sdddsadddddd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: 'd141asdddsadddddd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: 'd234asdddsadddddd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: 'dasd234ddsadddddd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
  {
    name: 'User',
    email: 'dasd324324ddsadddddd@example.com',
    password: bcrypt.hashSync('qwe', 10),
  },
];

export default users;
