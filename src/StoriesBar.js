import Storie from "./Storie"

export default function StoriesBar() {

    let stories = [
        {image: "images/frodo.jpg", userName: "frodo.baggins"},
        {image: "images/aragorn.jpg", userName: "king_aragorn"},
        {image: "images/boromir.jpg", userName: "ofc_boromir_"},
        {image: "images/gimli.jpg", userName: "gimli"},
        {image: "images/legolas.jpg", userName: "greenleaf"},
        {image: "images/pippin.jpg", userName: "pippin_took"},
        {image: "images/merry.jpg", userName: "brandybuck.m"},
        {image: "images/gandalf.jpg", userName: "gandalf"},
    ]

    return (
        <nav class="stories-bar">

            {stories.map(storie => <Storie 
                image = {storie.image}
                userName = {storie.userName}
            />)}
            <ion-icon class="scroll-button" name="chevron-forward-circle"></ion-icon>
        </nav>
    )
}