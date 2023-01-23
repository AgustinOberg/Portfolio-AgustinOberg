interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: Props) => {
  return (
    <h3
      className={`uppercase font-link text-xl md:text-4xl font-semibold text-neutral-600 mb-4 ${className}`}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
