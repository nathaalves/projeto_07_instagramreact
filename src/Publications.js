export default function Publications() {
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