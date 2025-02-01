import {
    BriefcaseBusiness,
    Files,
    GraduationCap,
    Medal,
    Microscope,
    UserSearch,
} from "lucide-react";

const DepartmentCard = ({ icon, work }) => (
    <div className="border hover:border-blue-500 border-slate-400 rounded-lg cursor-pointer w-full sm:w-[200px] py-4 text-center group transition-all">
        {/* Ikon hover uchun style */}
        <div className="flex justify-center text-gray-500 group-hover:text-blue-500 transition-all">
            {icon}
        </div>
        {/* Matn hover uchun style */}
        <p className="text-slate-600 font-medium group-hover:text-blue-500 transition-all">{work}</p>
    </div>
);

export default function Departments() {
    const department = [
        {
            id: 1,
            link: "/vacancy",
            work: "Bo'sh ish o'rinlari",
            icon: <BriefcaseBusiness size={35} />,
        },
        {
            id: 2,
            link: "/student",
            work: "Talabalarga",
            icon: <GraduationCap size={35} />,
        },
        {
            id: 3,
            link: "/research",
            work: "Tadqiqot",
            icon: <UserSearch size={35} />,
        },
        {
            id: 4,
            link: "/services",
            work: "Xizmatlar",
            icon: <Medal size={35} />,
        },
        {
            id: 5,
            link: "/lms",
            work: "LMS",
            icon: <Microscope size={35} />,
        },
        {
            id: 6,
            link: "/document",
            work: "Hujjatlar",
            icon: <Files size={35} />,
        },
    ];

    return (
        <div className="Departments px-5 my-10">
            <h3 className="text-[20px] font-medium">Bo'limlarimiz</h3>
            <hr className="text-slate-300 mt-2 mb-8" />

            <div className="flex flex-wrap gap-4 justify-center">
                {department.map((e) => (
                    <DepartmentCard key={e.id} icon={e.icon} work={e.work} />
                ))}
            </div>
        </div>
    );
}
