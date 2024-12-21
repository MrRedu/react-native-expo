export const BasicTypes = () => {
  const name: string = "Eduardo";
  const age = 8964;
  const isActive = true;
  const powers: string[] = ["Fly", "Super Strength"];
  return (
    <>
      <h3>Basic Types</h3>
      <div>
        <p>{name}</p>
        <p>{age} years old</p>
        <p>{isActive ? "Active" : "Inactive"}</p>
        {powers.length > 0 && (
          <ul>
            {powers.map((power, index) => (
              <li key={index}>{power}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
