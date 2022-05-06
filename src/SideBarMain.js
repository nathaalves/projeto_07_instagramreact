import Sugestion from "./Sugestion"

export default function SideBarMain() {

    const sugestions = [
        {image: "images/sauron.jpg", userName: "Sauron", name: "The Lord of The Darck"},
        {image: "images/nazgul.jpg", userName: "nazgul_number5", name: "Helm Hammerhead"},
        {image: "images/saruman.jpg", userName: "the_white", name: "Saruman"},
        {image: "images/balrog.jpg", userName: "im.balrog", name: "Balrog of Moria"},
        {image: "images/grima.jpg", userName: "grima", name: "Gríma, snake tongue"},
    ]

    return (
        <main class="side-bar-main">
            <div class="sugestions">
                <span>Sugestões para você</span>
                <span>Ver tudo</span>
            </div>

            {sugestions.map(sugestion => <Sugestion 
                image = {sugestion.image}
                userName = {sugestion.userName}
                name = {sugestion.name}
            />)}
        </main>
    )
}