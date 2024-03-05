// pages/api/workers/checkFinUnique.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { fin } = req.query;

    // Read existing data from file
    const filePath = path.join(process.cwd(), 'pages', 'data', 'workers', 'data.json');
    const existingData = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(existingData);

    // Check if 'fin' value already exists
    const finExists = parsedData.some(worker => worker.fin === fin);
    res.status(200).json({ isUnique: !finExists });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
