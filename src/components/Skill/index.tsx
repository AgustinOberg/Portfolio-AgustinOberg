interface Props {
  title: string;
}
const Skill = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-6 h-6 bg-red-400"></div>
      <span>{title}</span>
    </div>
  );
};

export default Skill;
