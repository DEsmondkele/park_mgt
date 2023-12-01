import express from 'express';
import routes from './src/routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  console.log('Received request:', req.method, req.url);
  next();
});
app.use(express.json());

app.use('/api/', routes);


app.get('/', (req, res) => {
  res.send('Welcome to car parking mgt!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
