interface SidebarHeaderprobs {}

const SidebarHeader: React.FC<SidebarHeaderprobs> = () => {
    return (
        <div className="flex bg-white border-1 border-grey-100 h-[7%]">
            <div className="w-[80%]">Bild</div>
            <div className="w-[20%]">X</div>
        </div>
    );
};

export default SidebarHeader;
