import { verify } from 'jsonwebtoken';
import { serialize } from 'cookie';

export default function logout(req: any, res: any) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  try {
    verify(token, 'secret');
    const serializedToken = serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });
    res.setHeader('Set-Cookie', serializedToken);
    return res.status(200).json('logout success');
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
