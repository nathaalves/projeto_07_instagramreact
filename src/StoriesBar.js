export default function StoriesBar() {
    return (
        <nav class="stories-bar">
            <a class="stories-profile" href="">
                <picture class="background-profile-picture">
                    <div class="profile-picture">
                        <img src="images/frodo.jpg" alt="frodo" />
                    </div>
                </picture>
                <span class="user-name">frodo.baggins</span>
            </a>
            <a class="stories-profile" href="">
                <picture class="background-profile-picture">
                    <div class="profile-picture">
                        <img src="images/aragorn.jpg" alt="aragorn" />
                    </div>
                </picture>
                <span class="user-name">king_aragorn</span>
            </a>
            <a class="stories-profile" href="">
                <picture class="background-profile-picture">
                    <div class="profile-picture">
                        <img src="images/boromir.jpg" alt="boromir" />
                    </div>
                </picture>
                <span class="user-name">ofc_boromir_</span>
            </a>
            <a class="stories-profile" href="">
                <picture class="background-profile-picture">
                    <div class="profile-picture">
                        <img src="images/gimli.jpg" alt="gimli" />
                    </div>
                </picture>
                <span class="user-name">gimli</span>
            </a>
            <a class="stories-profile" href="">
                <picture class="background-profile-picture">
                    <div class="profile-picture">
                        <img src="images/legolas.jpg" alt="legolas" />
                    </div>
                </picture>
                <span class="user-name">greenleaf</span>
            </a>
            <a class="stories-profile" href="">
                <picture class="background-profile-picture">
                    <div class="profile-picture">
                        <img src="images/pippin.jpg" alt="pippin" />
                    </div>
                </picture>
                <span class="user-name">pippin_took</span>
            </a>
            <a class="stories-profile" href="">
                <picture class="background-profile-picture">
                    <div class="profile-picture">
                        <img src="images/merry.jpg" alt="merry" />
                    </div>
                </picture>
                <span class="user-name">brandybuck.m</span>
            </a>
            <a class="stories-profile" href="">
                <picture class="background-profile-picture">
                    <div class="profile-picture">
                        <img src="images/gandalf.jpg" alt="gandalf" />
                    </div>
                </picture>
                <span class="user-name">gandalf</span>
            </a>
            <ion-icon class="scroll-button" name="chevron-forward-circle"></ion-icon>
        </nav>
    )
}