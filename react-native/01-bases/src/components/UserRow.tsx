interface UserRowProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
}
export const UserRow = ({
  firstName,
  lastName,
  email,
  avatar,
}: UserRowProps) => {
  return (
    <tr className="">
      <td className="p-2 grid place-items-center">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      </td>
      <td className="p-2 text-center">
        {firstName || "John"} {lastName || "Doe"}
      </td>
      <td className="p-2 text-center">{email || "N/A"}</td>
    </tr>
  );
};
