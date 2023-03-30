import { fields } from "../../Data/DataContainers/data";
import { FinishPage } from "../FormPages/FinishPage";
import { useStore } from "../../store/CurrentPageStore";
import { ProjectDetailForm } from "../FormPages/ProjectDetailForm";
import { StartPage } from "../FormPages/StartPage";
import Header from "./Header";
import Footer from "./Footer";
import { SummaryPage } from "../FormPages/SummaryPage";
import { PersonalData } from "../FormPages/PersonalData";
import { DatePicker } from "../FormPages/DatePicker";
import { CostPage } from "../FormPages/CostPage";

interface Sidebarprobs {
    NavToogle: boolean;
}
const Sidebar: React.FC<Sidebarprobs> = ({ NavToogle }) => {
    const inc = useStore((state) => state.inc);
    const currentPage = useStore((state) => state.currentPage);

    return (
        <div
            className={
                NavToogle === true
                    ? " z-20 float-right ease-in-out bg-white md:w-[30%] lg:w-[20%] duration-200 h-screen sm:w-full"
                    : "fixed left-[-100%]"
            }
        >
            <div className="z-30 h-full bg-white shadow-2xl">
                <Header></Header>

                {currentPage === 1 && <StartPage onNext={inc} />}
                {currentPage === 2 && (
                    <ProjectDetailForm fields={fields} onNext={inc} />
                )}
                {currentPage === 3 && <CostPage onNext={inc}></CostPage>}
                {currentPage === 4 && <DatePicker onNext={inc}></DatePicker>}
                {currentPage === 5 && (
                    <PersonalData onNext={inc}></PersonalData>
                )}
                {currentPage === 6 && <SummaryPage onNext={inc}></SummaryPage>}
                {currentPage === 7 && <FinishPage onNext={inc}></FinishPage>}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Sidebar;
