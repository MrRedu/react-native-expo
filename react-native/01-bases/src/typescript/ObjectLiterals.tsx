interface Person {
  name: string;
  age: number;
  isActive: boolean;
  powers: string[];
  address: Address;
}

interface Address {
  street?: string;
  number: number;
  city: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    name: "Eduardo",
    age: 8964,
    isActive: true,
    powers: ["Fly", "Super Strength"],
    address: {
      street: "Main St",
      number: 123,
      city: "New York",
    },
  };
  return (
    <>
      <h2>{`</ObjectLiterals>`}</h2>
      <pre>
        <code>{JSON.stringify(person, null, 2)}</code>
      </pre>
    </>
  );
};
