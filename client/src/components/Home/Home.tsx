import { useProfile } from "../../hooks";
import GameModeCard from "./GameModeCard";
import NavBar from "./NavBar";

const Home = () => {
  const { profile, error: profileError } = useProfile();
  if (profileError) {
    return <div className="text-red-500 p-4">{profileError}</div>;
  }

  // @ts-expect-error if the image is not showing either the user is not logged
  // or the problem is here
  const imageUrl = profile?.images?.[0]?.url;

  return (
    <div>
        <GameModeCard title="Versus Local"
          description="Pass and play with as many firends as you want"
          buttonText="Play"
          imageSrc="./src/assets/versus_local.png"
          imageAlt="Versus Local"
          navigateTo="/playlists"
        />

        <GameModeCard title="Versus Local"
          description="Pass and play with as many firends as you want"
          buttonText="Play"
          imageSrc="./src/assets/versus_local.png"
          imageAlt="Versus Local"
          navigateTo="/playlists"
        />
    </div>
  );
};

export default Home;
