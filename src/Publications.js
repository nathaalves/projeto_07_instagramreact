import Publication from "./Publication"

export default function Publications() {

    const publications = [
        {userName: "gandalf", userImage: "images/gandalf.jpg", media: "images/you-shall-not-pass.webp", liked: "frodo.baggins", likes: 8},
        {userName: "smeagol", userImage: "images/smeagol.jpg", media: "videos/myprecious.mp4", liked: "nathaalves73", likes: 1100},
        {userName: "frodo.beggins", userImage: "images/frodo.jpg", media: "images/the-shire.webp", liked: "galadriel", likes: 197},
        ]

    return (
        <div class="publications">
            {publications.map(publication => <Publication 
                userName = {publication.userName}
                userImage = {publication.userImage}
                media = {publication.media}
                liked = {publication.liked}
                likes = {publication.likes}
            />)}
        </div>
    )
}