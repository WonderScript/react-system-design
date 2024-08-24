import {useQuery} from '@tanstack/react-query';
import {getUser} from './getUser';
import usersAdapter from 'src/adapters/userAdapter';
import {User} from 'src/models/userSchema';

const useGetUsersNames = () =>
  useQuery<
    User[],
    Error,
    ReturnType<ReturnType<typeof usersAdapter>['getUsersRoles']>
  >({
    queryKey: ['getUsersRoles'],
    queryFn: getUser,
    select: data => usersAdapter(data).getUsersRoles(),
  });

export default useGetUsersNames;
