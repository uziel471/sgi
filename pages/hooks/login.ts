import axios from 'axios';

type LoginParams = {
  email: string;
  password: string;
};

export const login = ({ email, password }: LoginParams) => axios.post('/api/auth/login', { email, password });

export function signOut() {
  return axios
    .put('/logout');
}
