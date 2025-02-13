import { useNavigate } from 'react-router-dom';

interface GameModeCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt?: string;
  route: string;
}

const GameModeCard = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  route,
}: GameModeCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
      <figure className="px-3 pt-3 sm:px-6 sm:pt-6">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="rounded-box w-full h-48 sm:h-64 object-cover object-center"
          loading="lazy"
        />
      </figure>
      <div className="card-body gap-3">
        <h2 className="card-title text-xl sm:text-2xl text-base-content">{title}</h2>
        <p className="text-base-content/80">{description}</p>
        <div className="card-actions justify-end mt-2">
          <button
            className="btn btn-primary w-full sm:w-auto"
            onClick={() => navigate(route)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModeCard;
