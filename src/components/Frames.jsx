import dekan from '../assets/images/dekan.jpg'
import suxronAka from '../assets/images/suxrob_aka.jpg'
import zamdekan from '../assets/images/zamdekan.jpg'
import {Eye} from "lucide-react";
import {Button} from "antd";
export default  function Frames() {

    const information = [
        {
            id:1,
            img: dekan,
            job:  "AKT sohasida kasb talimi fakulteti dekani",
            fulName: "Igamberdiev Karimberdi Abdullaevich",
            reception_hour: "Har kuni 15.00-17.00 (Dushanba va shanbadan tashqari)",
            phone: " (+99871) 238-65-00",
            email: " igamberdiyev@tuit.uz"
        },
        {
            id:2,
            img : suxronAka,
            job:  "AKT sohasida kasb talimi fakulteti Yoshlar bilan ishlash bo‘yicha dekan muovini",
            fulName: "Norbekov Suhrob Farhod o‘g‘li",
            reception_hour: "Har kuni 15.00-17.00 (Dushanba va shanbadan tashqari)",
            phone: " (+99871) 238-65-08",
            email: "  s.norbekov@tuit.uz"
        },
        {
            id:3,
            img: zamdekan,
            job:  "AKT sohasida kasb ta’limi fakulteti o‘quv ishlar bo‘yicha dekan muovini",
            fulName: "Normatov Otaxon Masharibovich",
            reception_hour: "Har kuni 15.00-17.00 (Dushanba va shanbadan tashqari)",
            phone: "  (+99871) 238-65-08",
            email: "  o.normatov@tuit.uz"
        }
    ]
    return (
        <div className="Frames lg:mt-20 mt-10 max-w-[1440px] mx-auto px-5">
            <h3 className={"text-[22px] font-medium mb-3"}> Fakultet ma'muryati :</h3>
            <hr className={"text-slate-300 mb-10"}/>

            <div style={{
                scrollbarWidth: 'none', // Firefox
                // msOverflowStyle: 'none', // IE va Edge
            }} className="flex gap-8 overflow-x-auto  px-2 py-4">
                {information.map((e) => (
                    <div
                        className="min-w-[300px] md:min-w-[400px] lg:min-w-[400px] bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer overflow-hidden scroll-snap-align-start"
                        key={e.id}
                    >
                        <img
                            src={e.img}
                            alt="News"
                            className="w-full h-[400px] rounded-lg object-contain"
                        />
                        <div className="p-4 px-8">
                            <p className="font-medium text-[16px] mb-2">{e.job}</p>
                            <p className=" font-semibold text-sm mb-4">{e.fulName}</p>
                            <p className="text-slate-500 text-sm mb-4">Qabul vaqti: {e.reception_hour}</p>
                            <p className="text-slate-500 text-sm mb-4">Telefon: {e.phone}</p>
                            <p className="text-slate-500 text-sm mb-4">E-mail: {e.email}</p>
                            <div className="flex items-center justify-between text-slate-500 text-sm">
                                <div className="flex items-center gap-1">
                                    <Eye size={14} color="gray"/>
                                    <p>400k</p>
                                </div>
                                <Button>Batafsil</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}