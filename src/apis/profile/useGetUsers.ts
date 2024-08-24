import usersAdapter from "@/src/adapters/userAdapter";
import { User } from "@/src/models/userSchema";
import { getUser } from "./getUser";

const useGetUser = () =>
  useQuery<
    User[],
    Error,
    ReturnType<ReturnType<typeof usersAdapter>["getUsers"]>
  >({
    queryKey: ["getUsers"],
    queryFn: getUser,
    select: (data) => usersAdapter(data).getUsers(),
  });

export default useGetUser;
