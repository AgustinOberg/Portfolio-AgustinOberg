interface Props {
  children: React.ReactNode;
  className?: string;
}

const HeaderItem = ({ children, className }: Props) => {
  return (
    <li>
      <a
        className={`${
          className ??
          "hover:text-neutral-400 transition duration-500 md:text-lg text-xs"
        } font-link `}
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderItem;
