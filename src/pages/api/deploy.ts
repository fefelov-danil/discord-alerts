import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

const webhookUrl = 'https://discord.com/api/webhooks/1169657472638795906/lfizjRATT-xJ7B2KcCa-OWGdrCNZCwYVrbkb3ngsBZLzyawxnNZQt3A4tQCevnrmVy5m';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'POST') {
    res.status(200).json(req.body)

    const data = {
      content: req.body.message
    }

    axios.post(webhookUrl, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Ошибка при отправке сообщения:', error);
      });
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}
