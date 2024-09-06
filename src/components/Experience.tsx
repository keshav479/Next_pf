import { workExperience } from "../data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
    return (
        <div className="py-10 w-full text-center">
            <h1 className=" text-7xl font-bold heading text-[#C8A1E0]">
                About <span className="text-7xl font-bold text-[#E48A57]">Me</span> 
            </h1>

            <div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image
                                src={card.thumbnail}
                                alt={card.title}
                                width={128} // Adjust the width according to your design
                                height={128} // Adjust the height according to your design
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-3xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white/50 mt-3 font-semibold text-lg">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
