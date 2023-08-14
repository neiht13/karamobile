import { get } from '@vercel/edge-config';


export default async function handler(req, res) {
    const greeting = await get('listBai');
    res.status(200).json(greeting)
}