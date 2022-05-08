import React from 'react'

export default function Publication({userName, userImage, media, liked, likes}) {

    function Media({media}) {

        const urlLength = media.length
        let char = urlLength-1
        let extention = ""
    
        while (media[char] !== ".") {
            extention = media[char] + extention
            char--
            if (char < 0) {
                break
            }
        }
        
        const isImage = extention === "gif" || extention === "jpg" || extention === "jpeg" || extention === "png" || extention === "svg" || extention === "webp"
    
        return isImage ? <img src={media} /> : <video muted controls autoplay src={media} />
    }    
    
    
    const [btnLiked, setBtnLiked] = React.useState("Ride")
    const [btnUnLiked, setBtnUnLiked] = React.useState("Show")

    function giveLike() {
        setBtnLiked("Show")
        setBtnUnLiked("Ride")
    }

    function removeLike() {
        setBtnLiked("Ride")
        setBtnUnLiked("Show")
    }

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
            <main class="publication-main" onClick={giveLike}>
                <Media media={media}/>
            </main>
            <footer>
                <div class="publication-footer">
                    <div class="actions-bar">
                        <div>
                            <span class={"liked" + " " + btnLiked} onClick={removeLike}><ion-icon name="heart"></ion-icon></span>
                            <span class={"unLiked" + " " + btnUnLiked} onClick={giveLike}><ion-icon name="heart-outline"></ion-icon></span>
                            <a href=""></a>
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