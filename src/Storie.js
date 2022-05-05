export default function Storie({image, userName}) {
    return (
        <a class="stories-profile" href="">
            <picture class="background-profile-picture">
                <div class="profile-picture">
                    <img src={image} alt="gandalf" />
                </div>
            </picture>
            <span class="user-name">{userName}</span>
        </a>
    )
}