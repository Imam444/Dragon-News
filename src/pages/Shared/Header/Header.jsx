import moment from "moment";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="xl">{moment().format("MMMM D YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;
