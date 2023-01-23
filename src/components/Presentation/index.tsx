const Presentation = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="px-4">
        <span className=" uppercase font-link text-neutral-600 font-light md:text-lg">
          Hola, mi nombre es
        </span>
        <h1 className="lg:text-9xl md:text-8xl text-5xl uppercase font-semibold font-link mt-0.5">
          Agustín Oberg
        </h1>
        <h2 className="lg:text-5xl md:text-4xl text-xl text-neutral-500 tracking-wide font-link uppercase font-normal">
          Soy desarrollador fullstack
        </h2>
        <p className=" text-sm mt-1 tracking-widest font-link md:text-lg font-thin">
          Apasionado por las nuevas tecnologías y el mundo IT
        </p>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <p>X</p>
        </div>
      </div>
    </main>
  );
};

export default Presentation;
