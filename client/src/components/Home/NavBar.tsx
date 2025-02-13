import { FaBars } from "react-icons/fa";
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
    { name: 'spotify', label: 'Spotify' },
    { name: 'dark', label: 'Dark' },
    { name: 'light', label: 'Light' },
    { name: 'retro', label: 'Retro' },
    { name: 'luxury', label: 'Luxury' }
  ];

  return (
    <div className="navbar rounded-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-xl">
            <FaBars />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
            <li className="menu-title">Theme</li>
            {themes.map((t) => (
              <li key={t.name}>
                <button
                  className={`${theme === t.name ? 'active' : ''}`}
                  onClick={() => setTheme(t.name)}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
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
  );
};

export default NavBar;
