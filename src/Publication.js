export default function Publication({userName, userImage, media, liked, likes}) {
    return (
        <div class="publication">
            <header>
                <div class="publication-header">
                    <a class="publication-profile" href="">
                        <div class="profile-picture">
                            <img src={userImage} />
                        </div>
                        <span class="user-name">{userName}</span>
                    </a>
                    <a href="">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </a>
                </div>    
            </header>
            <main class="publication-main">
                <img src={media} />
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
                        <span class="likes"><span>Curtido por </span><a href="">{liked}</a><span> e </span><a href="">outras {likes} pessoas</a></span>
                    </div>
                </div>
            </footer>
        </div>
    )
}