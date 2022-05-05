export default function SideBar() {
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