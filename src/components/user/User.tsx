import "./user.scss";
import Single from "../single/Single";
import { singleUser } from "../../data.tsx";

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
