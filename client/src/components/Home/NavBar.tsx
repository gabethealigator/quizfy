import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  profileImageUrl?: string;
  displayName?: string;
}

const NavBar = ({ profileImageUrl }: NavBarProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home`);
  };

  return (
    <>
      <div className="navbar rounded-sm">
        <div className="navbar-start">
          <div className="tooltip tooltip-bottom" data-tip="Menu">
            <div className="btn btn-ghost text-xl" role="button">
              <FaBars />
            </div>
          </div>
        </div>

        <div className="navbar-center">
          <div className="tooltip tooltip-bottom" data-tip="Home">
            <a
              role="button"
              className="btn btn-ghost text-xl"
              onClick={handleClick}
            >
              Quizfy
            </a>
            {/* <ul tabIndex={0} className="dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"> */}
            {/*   <li> */}
            {/*     <input */}
            {/*       type="radio" */}
            {/*       name="theme-dropdown" */}
            {/*       className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" */}
            {/*       aria-label="Default" */}
            {/*       value="default" /> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <input */}
            {/*       type="radio" */}
            {/*       name="theme-dropdown" */}
            {/*       className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" */}
            {/*       aria-label="Retro" */}
            {/*       value="retro" /> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <input */}
            {/*       type="radio" */}
            {/*       name="theme-dropdown" */}
            {/*       className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" */}
            {/*       aria-label="Lofi" */}
            {/*       value="lofi" /> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <input */}
            {/*       type="radio" */}
            {/*       name="theme-dropdown" */}
            {/*       className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" */}
            {/*       aria-label="Luxury" */}
            {/*       value="luxury" /> */}
            {/*   </li> */}
            {/* </ul> */}
          </div>
        </div>

        <div className="navbar-end">
          <div className="tooltip tooltip-bottom" data-tip="Profile">
            <div className="avatar w-11">
              {profileImageUrl ? (
                <img className="rounded-full" src={profileImageUrl} alt="" />
              ) : (
                <div className="loading loading-xl ml-2" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
