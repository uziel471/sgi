import { verify } from 'jsonwebtoken';

export default function profile(req: any, res: any) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  try {
    const user = verify(token, 'secret');
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
