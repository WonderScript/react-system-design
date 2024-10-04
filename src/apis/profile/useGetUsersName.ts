import {useQuery} from '@tanstack/react-query';
import {getUser} from './getUser';
import usersAdapter from '../../adapters/userAdapter';
import {User} from '../../models/userSchema';

const useGetUsersNames = () =>
  useQuery<
    User[],
    Error,
    ReturnType<ReturnType<typeof usersAdapter>['getUsersNames']>
  >({
    queryKey: ['getUserNames'],
    queryFn: getUser,
    select: data => usersAdapter(data).getUsersNames(),
  });

export default useGetUsersNames;
