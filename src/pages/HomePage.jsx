import Banner from "../components/Banner.jsx";
import News from "../components/News.jsx";
import Announcement from "../components/Announcement.jsx";
import Frames from "../components/Frames.jsx";
import Departments from "../components/Departments.jsx";

export default function HomePage() {


    return (

        <div>
            <Banner/>
         <div className={"max-w-[1440px] mx-auto"}>
             <News/>
             <Announcement/>
             <Frames/>
             <Departments/>
         </div>
        </div>
    )
}