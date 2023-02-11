import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import userModel from '@/models/userModel';
import { Connect } from '@/utils/connect';

export default async function login(req: any, res: any) {
  await Connect();
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email, password })
      .lean()
      .exec();

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({
      email,
      userName: 'uziel estrada',
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, 'secret');
    const serializedToken = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 60 * 60,
      path: '/',
    });
    res.setHeader('Set-Cookie', serializedToken);
    return res?.json('login success');
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
