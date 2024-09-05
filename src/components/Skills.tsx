import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs} from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs} from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaReact size={110} />, label: "React" },
  { icon: <FaJsSquare size={140} />, label: "Javascript" },
  { icon: <FaNodeJs size={140} />, label: "Node" },
  { icon: <SiMongodb size={140} />, label: "MongoDB" },
  { icon: <SiExpress size={140} />, label: "Express" },
  { icon: <SiNextdotjs size={140} />, label: "Next" },
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-20 text-white">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="w-[160px] h-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
//43:09 continue
