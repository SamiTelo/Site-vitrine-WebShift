
interface TitleProps {
  title: string;
  heading: string;
}

export default function Title({ title, heading}: TitleProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {/* Title */}
      <div  className="inline-flex items-center  text-[10px] md:text-xs bg-[#EBDCF8] text-[#9D4EDD] px-8 py-2 rounded-full ">
          {title}
      </div>
      {/* Heading */}
      <h1 className="font-semibold text-2xl md:text-4xl mt-6 ">{heading}</h1>
    </div>
  );
}
