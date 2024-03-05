import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // Ensure data is not empty
    if (!data) {
      return res.status(400).json({ error: 'Data is required' });
    }

    try {
      // Read existing data from file
      const filePath = path.join(process.cwd(), 'pages', 'data', 'workers', 'data.json');
      const existingData = fs.readFileSync(filePath, 'utf-8');
      let parsedData = [];
      if (existingData) {
        parsedData = JSON.parse(existingData);
      }

      // Check if 'fin' value already exists
      const finExists = parsedData.some(worker => worker.fin === data.fin);
      if (finExists) {
        return res.status(400).json({ error: 'FIN must be unique' });
      }

      // Append new data
      parsedData.push(data);

      // Write data back to file
      fs.writeFileSync(filePath, JSON.stringify(parsedData));

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error:', error.message); // Log the specific error message
      return res.status(500).json({ error: 'Failed to store data' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
