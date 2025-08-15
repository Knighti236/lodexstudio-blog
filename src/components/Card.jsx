import React from "react";
import imgCard from "../assets/graffiti.avif";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { MdArrowOutward } from "react-icons/md";

const cardData = [
  {
    img: imgCard,
    title: "Launch your course with clarity and style",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod voluptatibus maiores expedita atque veritatis accusantium architecto dolor dolores enim nihil molestias ad, assumenda, officia iste sapiente, eos cupiditate minima quaerat.",
    Badge: [
      {
        icon: <FaReact className="w-4 h-4" />,
        label: "React.js",
        link: "https://react.dev/",
      },
      {
        icon: <RiTailwindCssFill className="w-4 h-4" />,
        label: "TailwindCSS",
        link: "https://tailwindcss.com/",
      },
      {
        icon: <DiResponsive className="w-4 h-4" />,
        label: "Responsive",
        link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
      },
    ],
  }
];

// Badge Component
const Badge = ({ icon, label, link }) => {
  return (
    <a
      className={`flex items-center gap-0.5 rounded-full px-2 py-[0.5px] text-xs font-medium font-Satoshi tracking-tight ring-1 ring-inset leading-relaxed hover:scale-105 transition-transform duration-200 ease-in-out

    ${
      label === "React.js"
        ? "bg-blue-50 text-blue-600 ring-blue-700/10"
        : label === "TailwindCSS"
        ? "bg-cyan-50 text-cyan-600 ring-cyan-700/10"
        : label === "Responsive"
        ? "bg-purple-50 text-purple-600 ring-purple-700/10"
        : label === "Mobile-First UI"
        ? "bg-gray-50 text-gray-600 ring-gray-700/10"
        : label === "Framer Motion"
        ? "bg-pink-50 text-pink-600 ring-pink-700/10"
        : label === "SEO Optimized"
        ? "bg-red-50 text-red-600 ring-red-700/10"
        : "bg-gray-50 text-gray-600 ring-gray-700/10"
    }
  `}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon} {label}
    </a>
  );
};

function ExempleSection() {
  return (
    <section
      id="examples"
      className="w-full bg-lp-bg py-14 px-4 sm:px-6 md:px-8"
    >
      <div className=" mx-auto px-4 pt-12 sm:px-6 lg:px-8 text-center">
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500 group overflow-hidden cursor-pointer"
            >
              <img
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105 "
                src={card.img}
                alt={`example-${index + 1}`}
              />

              {/* CTA button */}
              <div className="absolute top-2 right-3 bg-white backdrop-blur-lg rounded-full shadow-xl w-8 h-8 flex items-center justify-center z-50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 border-2 border-[#f0756d]">
                <MdArrowOutward className="size-5 text-[#e96360]" />
              </div>

              {/* Card content */}
              <div className="border-t border-[#EBEBEB] p-5 flex flex-col justify-between flex-1 itemce">
                <div className="flex items-center gap-3 flex-wrap">
                  {card.Badge &&
                    card.Badge.map((badge, index) => (
                      <Badge
                        key={index}
                        icon={badge.icon}
                        color={badge.color}
                        label={badge.label}
                        link={badge.link}
                      />
                    ))}
                </div>

                <h5 className="sm:text-sm md:text-base lg:text-lg text-start font-bold font-Satoshi leading-tight mb-3 mt-2">
                  {card.title}
                </h5>
                <p className="text-start font-Satoshi text-sm text-gray-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExempleSection;