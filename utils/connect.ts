import mongoose, { connection } from 'mongoose';

const { MONGO_URL } = process.env;

const conn = {
  isConnected: false,
};

export async function Connect() {
  if (conn.isConnected) return;

  const db = await mongoose.connect(MONGO_URL!);

  conn.isConnected = db.connections[0].readyState === 1;
}

connection.on('connected', () => {
  console.log('Mongoose connected to db');
});

connection.on('error', (err) => {
  console.log(err.message);
});

export default Connect;
