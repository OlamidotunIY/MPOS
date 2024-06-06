import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" width={"70px"} height={"81px"} />
      </Link>
    </div>
  );
};

export default Logo;
