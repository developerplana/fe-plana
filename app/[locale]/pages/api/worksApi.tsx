// pages/api/worksApi.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const apiUrl = `http://127.0.0.1:8000/api/works`;
      console.log("ini:,",apiUrl);
      const response = await axios.get(apiUrl);

      res.status(200).json(response.data);
    } catch (error: any) {
      console.error('Error fetching data from Laravel API:', error?.response?.data || error.message);
      res.status(500).json({ error: 'Failed to fetch data from Laravel API' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
