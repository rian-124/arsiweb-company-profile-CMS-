interface ProjectCardProps {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
}

export default function ProjectCard({
  title,
  description,
  bgColor = "bg-[#383838]",
  textColor = "text-white",
}: ProjectCardProps) {
  return (
    <div
      className={`h-[300px] ${bgColor} rounded-xl lg:p-10 md:p-3 p-10 flex flex-col justify-center font-normal text-2xl space-y-5`}
    >
      <h1 className="font-anta text-white">{title}</h1>
      <p
        className={`${
          textColor === "text-white" ? "text-gray-300" : "text-gray-400"
        } text-xs`}
      >
        {description}
      </p>
    </div>
  );
}
