import {User} from 'src/models/userSchema';
import URLS from './urls';
import {get} from '../api';

export const getUser = async () => {
  const {data} = await get<User[]>(URLS.user);

  return data;
};
