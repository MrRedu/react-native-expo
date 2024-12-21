import { useEffect, useRef, useState } from "react";
import { User } from "../interface/reqresponse";
import { loadUsersAction } from "../actions/load-users-action";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsersAction(1).then(setUsers);
  }, []);

  const nextPage = async () => {
    currentPageRef.current += 1;
    const users = await loadUsersAction(currentPageRef.current);

    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current -= 1;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current <= 1) return;

    currentPageRef.current -= 1;
    const users = await loadUsersAction(currentPageRef.current);
    setUsers(users);
  };

  return {
    users,
    prevPage,
    nextPage,
  };
}
