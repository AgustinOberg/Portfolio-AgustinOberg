import HeaderItem from "../HeaderItem";

const Header = () => {
  return (
    <header className="h-16 md:px-24 fixed top-0 bg-white w-full z-50">
      <nav className="w-full h-full">
        <ul className="flex items-center md:justify-end justify-center md:gap-12 gap-5 w-full h-full">
          <HeaderItem>HOME</HeaderItem>
          <HeaderItem>MY WORK</HeaderItem>
          <HeaderItem>ABOUT ME</HeaderItem>
          <HeaderItem className="bg-black py-2 px-4 text-white rounded shadow-lg hover:bg-white hover:text-cyan-400 border border-transparent hover:border-cyan-400 hover:shadow-lg transition duration-500">
            CONTACT ME
          </HeaderItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
