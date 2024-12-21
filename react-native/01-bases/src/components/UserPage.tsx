import { Button } from "./Button";
import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";

export const UserPage = () => {
  const { users, prevPage, nextPage } = useUsers();
  return (
    <>
      <h2>{`</UserPage>`}</h2>

      <table className="w-[500px] bg-slate-800 rounded-xl text-gray-200">
        <thead>
          <tr className="bg-slate-700 font-semibold md:text-lg">
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-600">
          {users.map((user) => (
            <UserRow
              key={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              email={user.email}
              avatar={user.avatar}
            />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <Button onClick={prevPage}>Prev</Button>
        <Button onClick={nextPage}>Next</Button>
      </div>
    </>
  );
};
