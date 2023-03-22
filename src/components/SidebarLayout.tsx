import SidebarContainer from "./SidebarContainer";

interface SidebarLayoutprobs {
    NavToogle: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutprobs> = ({ NavToogle }) => {
    return (
        <div
            className={
                NavToogle === true
                    ? "float-right ease-in-out bg-white w-[25%] duration-200 z-20 h-full px-2"
                    : "fixed left-[-100%]"
            }
        >
            <SidebarContainer />
        </div>
    );
};

export default SidebarLayout;
