interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ type = "button", onClick, children }: ButtonProps) => {
  return (
    <button
      type={type}
      className="w-full max-w-sm py-2 px-4 rounded-sm shadow border 
      hover:bg-slate-500 bg-slate-600 border-gray-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
