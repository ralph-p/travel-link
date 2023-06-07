import { airTransportOptions } from '@/constants/form'

export default function handler(req, res) {
    res.status(200).json({ options: airTransportOptions })
  }
  