// express import
import express from 'express';
import cors from 'cors';
// mongoose import
import mongoose from 'mongoose';
//bodyparser import
import bodyparser from 'body-parser';
// routes import
import studentroutes from './routes/student';
import bookroutes from './routes/book';
import userroutes from './routes/user';
import authroutes from './routes/auth';
import { MONGODB_URI, PORT } from './config/env';

const app = express();

app.use(cors());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send(`welcome to library`);
});

const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`exemple app listening at http://${address}:${port}`);
});

studentroutes(app);
bookroutes(app);
userroutes(app);
authroutes(app);
