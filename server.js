import express from 'express';
  import { Pool } from 'pg';

  const app = express();
  const port = 3000;

  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'webapp',
    password: 'password',
    port: 5432,
  });

  app.use(express.json());

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
