// pages/api/edit-worker.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Read the data from data.json
      const dataFilePath = path.join(process.cwd(), 'pages', 'data', 'workers', 'data.json');
      const rawData = fs.readFileSync(dataFilePath, 'utf-8');
      const data = JSON.parse(rawData);

      // Get the posted data
      const { id, ...postData } = req.body;

      // Find the worker object to edit
      const workerIndex = data.findIndex(worker => worker.fin === id);
      if (workerIndex !== -1) {
        // Update the worker object with the posted data
        Object.assign(data[workerIndex], postData);
        
        // Write the updated data back to data.json
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

        res.status(200).json({ success: true, message: 'Worker data updated successfully' });
      } else {
        res.status(404).json({ success: false, message: 'Worker not found' });
      }
    } catch (error) {
      console.error('Error editing worker data:', error);
      res.status(500).json({ success: false, message: 'Failed to update worker data' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
