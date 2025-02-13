import { FaBars, FaPalette } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../../hooks/useTheme';

interface NavBarProps {
  profileImageUrl?: string;
}

const NavBar = ({ profileImageUrl }: NavBarProps) => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    navigate(`/home`);
  };

  const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 
    'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 
    'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 
    'business', 'acid', 'lemonade', 'night', 'coffee', 'winter'
  ];

  return (
    <div className="navbar rounded-sm">
      <div className="navbar-start">
        <div className="tooltip tooltip-bottom" data-tip="Menu">
          <div className="btn btn-ghost text-xl">
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
        </div>
      </div>

      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost" data-tip="Theme">
            <FaPalette className="text-xl" />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 max-h-96 overflow-y-auto">
            {themes.map((t) => (
              <li key={t}>
                <button
                  className={`${theme === t ? 'active' : ''}`}
                  onClick={() => setTheme(t)}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

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
  );
};

export default NavBar;
