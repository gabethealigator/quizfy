import NavBar from "../Home/NavBar";
import { useProfile } from "../../hooks";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { profile, error: profileError } = useProfile();

  if (profileError) {
    return (
      <div className="text-red-500 p-4 text-center">
        {profileError}
      </div>
    )
  }

  // @ts-expect-error if the image is not showing either the user is not logged
  // or the problem is here
  const imageUrl = profile?.images?.[0]?.url;

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative backdrop-blur-md bg-base-200/50 rounded-lg shadow-lg my-3 sm:my-5">
            <div className="relative z-10 bg-transparent">
              <NavBar profileImageUrl={imageUrl} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8">
        <div className="fade-in">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
