import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-3">
      <LogoSection />
      <SearchBar />
      <AuthSection />
    </div>
  );
};

export default NavComponent;

const AuthSection: React.FC = () => {
  const { data: sessionData } = useSession();

  return <>{sessionData ? <LoggedInComponent /> : <LoggedOutComponent />}</>;
};

const LoggedOutComponent: React.FC = () => {
  return (
    <div className="py-1" role="none">
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-100"
        role="menuitem"
        tabIndex={-1}
        id="menu-item-6"
        onClick={() => signIn()}
      >
        Login
      </a>
    </div>
  );
};

const LoggedInComponent: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    sessionData && (
      <div className="relative inline-block text-left">
        <div>
          {sessionData && sessionData.user && sessionData.user.image && (
            <Image
              src={sessionData.user.image}
              alt="Picture of Logged in user"
              width={45}
              height={45}
              className="rounded-full border-2 border-gray-500/50"
            />
          )}
        </div>

        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              <span>Logged in as: {sessionData.user?.name}</span>
            </a>
          </div>
          <div className="py-1" role="none">
            <Link
              href={"/profile/" + sessionData.user?.name}
              className="block px-4 py-2 text-sm text-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              Profile
            </Link>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-6"
              onClick={() => signOut()}
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    )
  );
};

const SearchBar: React.FC = () => {
  return (
    <form method="GET" className="max-w-1/2 w-1/2">
      <div className="relative w-full text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="focus:shadow-outline p-1 focus:outline-none"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          className="w-full rounded-md bg-gray-900 py-2 pl-10 text-sm text-white focus:bg-gray-700 focus:text-gray-900 focus:outline-none"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    </form>
  );
};

const LogoSection: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={"/logo.jpg"}
        className="mr-3 rounded-full"
        alt="BhayanakGRAM Logo"
        height={50}
        width={50}
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        BhayanakGRAM
      </span>
    </Link>
  );
};
