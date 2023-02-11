import { NextApiRequest, NextApiResponse } from 'next';
import UserModel from '@/models/userModel';

export default async function addUser(req: NextApiRequest, res: NextApiResponse) {
  const {
    name, userName, email, password,
  } = req.body;

  try {
    const user = await UserModel.create({
      name,
      userName,
      email,
      password,
    });
    res.status(200).json({ user });
  } catch (error) {
    res.json({ error });
  }
}
