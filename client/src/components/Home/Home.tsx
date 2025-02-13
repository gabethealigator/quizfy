import GameModeCard from "./GameModeCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GameModeCard
        title="Versus Local"
        description="Pass and play with as many friends as you want"
        buttonText="Play"
        imageSrc="/versus_local.png"
        imageAlt="Versus Local"
        route="/versus-local"
      />

      <GameModeCard
        title="Online Mode"
        description="Play with friends online"
        buttonText="Play"
        imageSrc="/online.png"
        imageAlt="Online Mode"
        route="/online"
      />
    </div>
  );
};

export default Home;
