import { useProfile, usePlaylists } from "../../hooks";
import NavBar from "./NavBar";

const Home = () => {
  const { profile, isLoading: profileLoading, error: profileError } = useProfile();
  const { playlists, isLoading: playlistsLoading, error: playlistsError } = usePlaylists();

  if (profileError) {
    return <div className="text-red-500 p-4">{profileError}</div>;
  }

  // @ts-expect-error the image is fetching correcly, if it doenst then the error
  // probably here
  const imageUrl = profile?.images?.[0]?.url;

  return (
    <>
      <div className="m-5">
        <NavBar profileImageUrl={imageUrl} />
        <div className="p-4">
          {profileLoading ? (
            <div>Carregando perfil...</div>
          ) : profile ? (
            <div>
              <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
          ) : (
            <div>No profile data available</div>
          )}

          {playlistsLoading ? (
            <div>Carregando playlists...</div>
          ) : playlistsError ? (
            <div className="text-red-500">{playlistsError}</div>
          ) : playlists ? (
            <div>
              <pre>{JSON.stringify(playlists, null, 2)}</pre>
            </div>
          ) : (
            <div>No playlists available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
