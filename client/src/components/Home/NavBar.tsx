import { FaBars } from "react-icons/fa";

interface NavBarProps {
  profileImageUrl?: string;
  displayName?: string;
}

const NavBar = ({ profileImageUrl }: NavBarProps) => {
  return (
    <>
      <div className="navbar shadow-sm rounded-sm">
        <div className="navbar-start">
          <div className="btn btn-ghost text-xl" role="button">
            <FaBars />
          </div>
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Quizfy</a>
        </div>

        <div className="navbar-end">
          <div className="avatar w-11">
            {profileImageUrl && (
              <img className="rounded-full" src={profileImageUrl} alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
