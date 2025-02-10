import { useNavigate } from 'react-router-dom';

interface GameModeCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt?: string;
  navigateTo?: string;
}

const GameModeCard = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  navigateTo,
}: GameModeCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <figure className="px-4 pt-4">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="rounded-xl w-full h-64 object-cover object-top"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModeCard;
