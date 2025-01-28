import tatu from '../assets/images/Tatu6.jpg';
import {Eye} from "lucide-react";
import {Button} from "antd";

export default function News() {
    const news = [
        {
            id: 1,
            img: tatu,
            header: "Hurmatli ustozlar, hamkasblar, doktorantlar, tadqiqotchilar!",
            title: "Sizni Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
            date: "10.12.2024",
        },
        {
            id: 2,
            img: tatu,
            header: "Hurmatli ustozlar, hamkasblar, doktorantlar, tadqiqotchilar!",
            title: "Sizni Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
            date: "10.12.2024",
        },
        {
            id: 3,
            img: tatu,
            header: "Hurmatli ustozlar, hamkasblar, doktorantlar, tadqiqotchilar!",
            title: "Sizni Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
            date: "10.12.2024",
        },
        {
            id: 4,
            img: tatu,
            header: "Hurmatli ustozlar, hamkasblar, doktorantlar, tadqiqotchilar!",
            title: "Sizni Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
            date: "10.12.2024",
        },
        {
            id: 5,
            img: tatu,
            header: "Hurmatli ustozlar, hamkasblar, doktorantlar, tadqiqotchilar!",
            title: "Sizni Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
            date: "10.12.2024",
        },
        {
            id: 6,
            img: tatu,
            header: "Hurmatli ustozlar, hamkasblar, doktorantlar, tadqiqotchilar!",
            title: "Sizni Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti",
            date: "10.12.2024",
        },
    ];

    return (
        <div className=" md:my-10 my-4 px-4">
            <div>
                <h3 className="text-[22px] font-medium mb-3">So'nggi yangiliklar</h3>
                <hr className="mb-6 text-slate-400"/>
                <div style={{
                    scrollbarWidth: 'none', // Firefox
                    // msOverflowStyle: 'none', // IE va Edge
                }} className="flex gap-8 overflow-x-auto  px-2 py-4">
                    {news.map((e) => (
                        <div
                            className="min-w-[300px] md:min-w-[400px] lg:min-w-[400px] bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer overflow-hidden scroll-snap-align-start"
                            key={e.id}
                        >
                            <img
                                src={e.img}
                                alt="News"
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="p-4">
                                <p className="font-medium text-lg mb-2">{e.header}</p>
                                <p className="text-slate-500 text-sm mb-4">{e.title}</p>
                                <div className="flex items-center justify-between text-slate-500 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Eye size={14} color="gray"/>
                                        <p>400k</p>
                                    </div>
                                    <p>{e.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={"flex justify-center h-full lg:mt-10 mt-5"}><Button
                    className={"px-20 py-10  lg:w-1/8 w-1/2 h-full"}>Barchasi</Button></div>
            </div>
        </div>
    );
}
