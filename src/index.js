import ReactDOM from 'react-dom';

function PageHeader() {
    return (
        <header class="page-header">
            <div class="descktop-page-header">
                <a class="logo" href="">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="divider"></div>
                    <img src="images/logo.png" alt="instagram-logo" />
                </a>
                <input class="search-input" type="text" placeholder="Pesquisar" />
                <nav class="nav-bar">
                    <a href="">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                    <a href="">
                        <ion-icon name="compass-outline"></ion-icon>
                    </a>
                    <a href="">
                        <ion-icon name="heart-outline"></ion-icon>
                    </a>
                    <a href="">
                        <ion-icon name="person-outline"></ion-icon>
                    </a>
                </nav>
            </div>
            <div class="mobile-page-header">
                <a href="">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="">
                    <img src="images/logo.png" alt="instagram-logo" />
                </a>
                <a href="">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
            </div>
        </header>
    )
}

function StoriesBar() {
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

function Publications() {
    return (
        <div class="publications">
            <div class="publication">
                <header>
                    <div class="publication-header">
                        <a class="publication-profile" href="">
                            <div class="profile-picture">
                                <img src="images/gandalf.jpg" alt="gandalf" />
                            </div>
                            <span class="user-name">gandalf</span>
                        </a>
                        <a href="">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </a>
                    </div>    
                </header>
                <main class="publication-main">
                    <img src="images/you-shall-not-pass.webp" alt="you-shall-not-pass" />
                </main>
                <footer>
                    <div class="publication-footer">
                        <div class="actions-bar">
                            <div>
                                <a href="">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </a>
                                <a href="">
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                </a>
                                <a href="">
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </a>
                            </div>
                            <a href="">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </a>
                        </div>
                        <div class="profile">
                            <div class="profile-picture">
                                <img src="images/frodo.jpg" alt="" />
                            </div>
                            <span class="likes"><span>Curtido por </span><a href="">frodo.baggins</a><span> e </span><a href="">outras 8 pessoas</a></span>
                        </div>
                    </div>
                </footer>
            </div>
            <div class="publication">
                <header>
                    <div class="publication-header">
                        <a class="publication-profile" href="">
                            <div class="profile-picture">
                                <img src="images/smeagol.jpg" alt="smeagol" />
                            </div>
                            <span class="user-name">smeagol</span>
                        </a>
                        <a href="">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </a>
                    </div>
                </header>
                <main class="publication-main">
                    <video controls autoplay>
                        <source src="videos/myprecious.mp4" type="video/mp4" />
                        <source src="videos/myprecious.ogv" type="video/ogv" />
                    </video>
                </main>
                <footer>
                    <div class="publication-footer">
                        <div class="actions-bar">
                            <div>
                                <a href="">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </a>
                                <a href="">
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                </a>
                                <a href="">
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </a>
                            </div>
                            <a href="">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </a>
                        </div>
                        <div class="profile">
                            <div class="profile-picture">
                                <img src="images/eu.jpeg" alt="" />
                            </div>
                            <span class="likes"><span>Curtido por </span><a href="">nathaalves73</a><span> e </span><a href="">outras 1.100.000 pessoas</a></span>
                        </div>
                    </div>
                </footer>
            </div>
            <div class="publication">
                <header>
                    <div class="publication-header">
                        <a class="publication-profile" href="">
                            <div class="profile-picture">
                                <img src="images/frodo.jpg" alt="frodo" />
                            </div>
                            <span class="user-name">frodo.beggins</span>
                        </a>
                        <a href="">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </a>
                    </div>    
                </header>
                <main class="publication-main">
                    <img src="images/the-shire.webp" alt="the-shire" />
                </main>
                <footer>
                    <div class="publication-footer">
                        <div class="actions-bar">
                            <div>
                                <a href="">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </a>
                                <a href="">
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                </a>
                                <a href="">
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </a>
                            </div>
                            <a href="">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </a>
                        </div>
                        <div class="profile">
                            <div class="profile-picture">
                                <img src="images/galadriel.jpg" alt="galadriel" />
                            </div>
                            <span class="likes"><span>Curtido por </span><a href="">galadriel</a><span> e </span><a href="">outras 197 pessoas</a></span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

function SideBar() {
    return (
        <div class="side-bar">
            <header class="side-bar-header">
                <div class="profile-picture" href="">
                    <img class="profile-picture" src="images/sam.jpg" alt="" />
                </div>
                <div href="">
                    <span class="user-name">samwise</span>
                    <span>Samwise Gamgee</span>
                </div>
            </header>
            <main class="side-bar-main">
                <div class="sugestions">
                    <span>Sugestões para você</span>
                    <span>Ver tudo</span>
                </div>
                <div class="sugestion">
                    <div class="profile">
                        <div class="profile-picture">
                            <img class="profile-picture" src="images/sauron.jpg" alt="" />
                        </div>
                        <div href="">
                            <h2 class="user-name">Sauron</h2>
                            <span>The Lord of The Darck</span>
                        </div>
                    </div>
                    <span>Seguir</span>
                </div>
                <div class="sugestion">
                    <div class="profile">
                        <div class="profile-picture">
                            <img class="profile-picture" src="images/nazgul.jpg" alt="" />
                        </div>
                        <div >
                            <h2 class="user-name">nazgul_number5</h2>
                            <span>Helm Hammerhead</span>
                        </div>
                    </div>
                    <span>Seguir</span>
                </div>
                <div class="sugestion">
                    <div class="profile">
                        <div class="profile-picture">
                            <img class="profile-picture" src="images/saruman.jpg" alt="" />
                        </div>
                        <div >
                            <h2 class="user-name">the_white</h2>
                            <span>Saruman</span>
                        </div>
                    </div>
                    <span>Seguir</span>
                </div>
                <div class="sugestion">
                    <div class="profile">
                        <div class="profile-picture">
                            <img class="profile-picture" src="images/balrog.jpg" alt="" />
                        </div>
                        <div >
                            <h2 class="user-name">im.balrog</h2>
                            <span>Balrog of Moria</span>
                        </div>
                    </div>
                    <span>Seguir</span>
                </div>
                <div class="sugestion">
                    <div class="profile">
                        <div class="profile-picture">
                            <img class="profile-picture" src="images/grima.jpg" alt="" />
                        </div>
                        <div >
                            <h2 class="user-name">grima</h2>
                            <span>Gríma, snake tongue</span>
                        </div>
                    </div>
                    <span>Seguir</span>
                </div>
            </main>
            <footer class="side-bar-footer">
            <span><a href="">Sobre</a> &#8226 <a href="">Ajuda</a> &#8226 <a href="">API</a> &#8226 <a href="">Carreiras</a> &#8226 <a href="">Privacidade</a> &#8226 <a href="">Termos</a> &#8226 <a href="">Localizações</a> &#8226 <a href="">Contas mais relevantes</a> &#8226 <a href="">Hastags</a> &#8226 <a href="">Idioma</a></span>
                <span>&#169 INSTAGRAM DO FACEBOOK</span>
            </footer>
        </div>
    )
}

function PageMain() {
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

function MobilePageFooter() {
    return (
        <footer class="mobile-page-footer">
            <nav>
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </nav>
        </footer>
    )
}

function App() {
    return (
        <div>
            <PageHeader />
            <PageMain />
            <MobilePageFooter />
        </div>
    )
}

const app = App();
const element = document.querySelector(".root");

ReactDOM.render(app, element);