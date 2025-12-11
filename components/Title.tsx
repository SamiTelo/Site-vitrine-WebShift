
interface TitleProps {
  title: string;
  heading: string;
  texte: string;
}

export default function Title({ title, heading, texte }: TitleProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {/* Title */}
      <div  className="inline-flex items-center  bg-[#7444FD]/15 text-[#7444FD] px-8 py-2 rounded-full ">
          {title}
      </div>
      {/* Heading */}
      <h1 className="font-bold md:text-3xl text-2xl mt-6 ">{heading}</h1>
      {/* Texte */}
      <p className="md:text-md text-gray-600 md:my-10 my-6 ">{texte}</p>
    </div>
  );
}
