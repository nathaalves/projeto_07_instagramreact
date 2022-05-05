import SideBarHeader from "./SideBarHeader"
import SideBarMain   from "./SideBarMain"
import SideBarFooter from "./SideBarFooter"

export default function SideBar() {

    const userName = "samwise"
    const name = "Samwise Gamgee"

    return (
        <div class="side-bar">

            <SideBarHeader userName={userName} name={name}/>

            <SideBarMain />

            <SideBarFooter />
        </div>
    )
}