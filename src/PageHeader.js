export default function PageHeader() {
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