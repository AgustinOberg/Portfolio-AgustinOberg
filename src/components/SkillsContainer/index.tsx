import React from "react";

interface Props {
  children: React.ReactNode;
}

const SkillsContainer = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-2">
      {children}
    </div>
  );
};

export default SkillsContainer;
