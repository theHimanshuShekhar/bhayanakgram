import Image from "next/image";
import Link from "next/link";

const FooterComponent: React.FC = () => {
  return (
    <footer className=" bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <Link href="/" className="hover:underline">
          BhayanakGRAM™
        </Link>
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Github
          </a>
        </li>
        <li>
          <Link
            href="https://github.com/theHimanshuShekhar"
            className="hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default FooterComponent;
