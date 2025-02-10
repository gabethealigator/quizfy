import NavBar from "../Home/NavBar";
import { useProfile } from "../../hooks";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { profile, error: profileError } = useProfile();

  // @ts-expect-error if the image is not showing either the user is not logged
  // or the problem is here
  const imageUrl = profile?.images?.[0]?.url;

  return (
    <div>
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 m-5">
          <div className="bg-base-100 rounded-xl shadow-lg">
            <NavBar profileImageUrl={imageUrl} />
          </div>
        </div>
      </div>

      {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-24">
          <Outlet />
        </main>
    </div>
  );
};

export default Layout;
