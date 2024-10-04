import {useQuery} from '@tanstack/react-query';
import {getUser} from './getUser';
import usersAdapter from '../../adapters/userAdapter';
import {User} from '../../models/userSchema';

const useGetUser = () =>
  useQuery<
    User[],
    Error,
    ReturnType<ReturnType<typeof usersAdapter>['getUsers']>
  >({
    queryKey: ['getUsers'],
    queryFn: getUser,
    select: data => usersAdapter(data).getUsers(),
  });

export default useGetUser;
