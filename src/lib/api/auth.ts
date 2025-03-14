import api from '@/config/axios';

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  const response = await api.post('/users/register', data);
  return response.data;
};
