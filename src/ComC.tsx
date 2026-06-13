import { useContext } from "react";
import UserContext from "./UserContext";

function ComC() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>Component C</h1>
      <h2>com A data - {user}</h2>
    </div>
  );
}

export default ComC;