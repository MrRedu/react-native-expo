import { useForm } from "react-hook-form";
import { Button } from "./Button";

type FormInputs = {
  email: string;
  password: string;
};

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<FormInputs>({
    defaultValues: {
      email: "eduardo@test.com",
      password: "12345678",
    },
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <h2>{`</FormPage>`}</h2>
      <form onSubmit={onSubmit} className="w-full max-w-sm flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="email@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="text-gray-700  border border-gray-500 rounded-sm p-2 w-full"
          />
          {errors?.email && (
            <span className="text-red-500 font-semibold">
              {errors?.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="password"
            placeholder="********"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className="text-gray-700  border border-gray-500 rounded-sm p-2 w-full"
          />
          {errors?.password && (
            <span className="text-red-500 font-semibold">
              {errors?.password.message}
            </span>
          )}
        </div>
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </>
  );
};
