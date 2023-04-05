import iconGitHub from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={iconGitHub} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
