import SidebarContainer from "./SidebarContainer";


interface SidebarLayoutprobs {
    NavToogle: boolean;
}

//Component for toggle the sidebar itself
//can be removed and styling can be implemented in the container after knowing how to handle th z-index
const SidebarLayout: React.FC<SidebarLayoutprobs> = ({ NavToogle }) => {
    return (
        <div
            className={
                NavToogle === true
                    ? " z-20 float-right ease-in-out bg-white w-[25%] duration-200 h-screen"
                    : "fixed left-[-100%]"
            }
        >
            <SidebarContainer />
        </div>
    );
};

export default SidebarLayout;
