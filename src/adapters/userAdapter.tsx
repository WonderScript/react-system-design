import UsersSchema, {User} from 'src/models/userSchema';

function usersAdapter(users: User[]) {
  const parsedResult = UsersSchema.safeParse(users);

  if (!parsedResult.success) {
    throw new Error('Invalid user data');
  }

  function getUsers() {
    return users;
  }

  function getUsersNames() {
    return users.map(user => user.name);
  }

  function getUsersRoles() {
    return users.map(user => user.role);
  }

  return {
    getUsers,
    getUsersRoles,
    getUsersNames,
  };
}

export default usersAdapter;
