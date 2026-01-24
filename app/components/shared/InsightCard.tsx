import Link from "next/link";

type Props = {
  title: string;
  date: string;
  read: string;
  image: string;
  desc: string;
  href: string;
  external?: boolean;
};

export default function InsightCard({
  title,
  date,
  read,
  image,
  desc,
  href,
  external = false,
}: Props) {
  const Wrapper = external ? "a" : Link;

  return (
    <Wrapper
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="
        bg-white
        rounded-3xl 
        shadow-lg 
        overflow-hidden 
        border border-gray-200 
        hover:shadow-2xl
        transition-all duration-300 
        hover:-translate-y-2
      "
    >
      {/* IMAGE */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
          <span>{date}</span>
          <span>•</span>
          <span>{read}</span>
        </div>

        <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {desc}
        </p>

        <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full" />
      </div>
    </Wrapper>
  );
}
