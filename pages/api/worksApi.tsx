import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Make a GET request to the external API
      const response = await axios.get('${process.env.CMS_ENDPOINT}/api/works');

      // Send the entire response data back to the client
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching data from external API:', error);
      res.status(500).json({ error: 'Failed to fetch data from external API' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
