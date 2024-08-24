import usersAdapter from "@/src/adapters/userAdapter";
import { User } from "@/src/models/userSchema";
import { useQuery } from "react-query";
import { getUser } from "./getUser";

const useGetUsersNames = () =>
  useQuery<
    User[],
    Error,
    ReturnType<ReturnType<typeof usersAdapter>["getUsersRoles"]>
  >({
    queryKey: ["getUsersRoles"],
    queryFn: getUser,
    select: (data) => usersAdapter(data).getUsersRoles(),
  });

export default useGetUsersNames;
