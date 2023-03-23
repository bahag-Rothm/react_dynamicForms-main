import { useState } from "react";
import SidebarLayout from "./components/SidebarLayout";
import "./styles.css";

export default function App() {
    const handleNav = () => {
        setNav(!NavToogle);
    };
    const [NavToogle, setNav] = useState<boolean>(true);
    return (
        <div className="z-0 w-full h-screen bg-gray-200">
            <SidebarLayout NavToogle={NavToogle}></SidebarLayout>

            <div className="z-0 flex w-24 h-8 bg-blue-500">
                <div onClick={handleNav} className="">
                    {NavToogle ? <p>schließen</p> : <p>Öffnen</p>}
                </div>
            </div>
        </div>
    );
}
