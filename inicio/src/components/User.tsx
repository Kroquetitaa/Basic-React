import { useState } from "react";

interface Users {
  uid: string;
  name: string;
}

const User = () => {
  const [user, setUser] = useState<Users>();

  const login = (): void => {
    setUser({
      uid: "ABC123",
      name: "Sergio",
    });
    console.log(user);
  };

  return (
    <div className="mt-5">
      <h3>Usuario: useState</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};

export default User;
