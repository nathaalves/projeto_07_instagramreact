import StoriesBar   from "./StoriesBar"
import Publications from "./Publications"
import SideBar      from "./SideBar"

export default function PageMain() {
    return (
        <main class="page-main">
            <div>
                <StoriesBar />
                <Publications />
            </div>
            <div class="container">
                <SideBar />
            </div>
        </main>
    )
}