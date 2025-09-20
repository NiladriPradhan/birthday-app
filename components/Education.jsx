import mp from "@/public/images/mp.png";
import hs from "@/public/images/hs.png";
import bca from "@/public/images/bca.png";
import mca from "@/public/images/mca.png";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

export default function Education() {
    const creations = [
        {
            title: "Secondary (Madhyamik / Class 10)",
            description:
                "Completed Secondary Examination with a strong foundation in Mathematics, Science, and Computer basics.",
            image: mp,
            grade: "First Division",
            position: "object-center",
            passout_year: "2020",
        },
        {
            title: "Higher Secondary (HS / Class 12)",
            description:
                "Specialized in Science stream with focus on Physics, Chemistry, Mathematics, and Computer Science.",
            image: hs,
            grade: "First Division",
            position: "object-right",
            passout_year: "2022",
        },
        {
            title: "Bachelor of Computer Applications (BCA)",
            description:
                "Gained expertise in programming, database management, web development, and computer networks.",
            image: bca,
            grade: "CGPA: 8.35/10",
            position: "object-center",
            passout_year: "2025",
        },
        {
            title: "Master of Computer Applications (MCA)",
            description:
                "Advanced studies in software engineering, AI, data science, and full-stack development.",
            image: mca,
            // grade: "Pursuing",
            position: "object-right",
            passout_year: "Pursuing",
        },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
            <section className="bg-white">
                <h1 className="text-6xl pt-4 font-semibold text-center mx-auto flex items-center justify-center gap-3">
                    <span> <GraduationCap className="w-12 h-12 text-gray-600" /></span> Education Journey
                </h1>

                <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                    A timeline of my academic journey, highlighting the key milestones in
                    my education.
                </p>

                <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                    {creations.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-md group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                className={`h-full w-full rounded-md object-cover ${item.position}`}
                                fill
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h1 className="text-2xl font-semibold">{item.title}</h1>
                                <p className="text-sm mt-1">{item.description}</p>
                                <p className="text-sm mt-2">
                                    {item.grade ? <span className="font-medium">Grade:{item.grade}</span> : null}
                                </p>
                                <p className="text-sm">
                                    <span className="font-medium">Passout Year:</span>{" "}
                                    {item.passout_year}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
