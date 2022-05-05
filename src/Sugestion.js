export default function Sugestion({image, userName, name}) {
    return (
        <div class="sugestion">
            <div class="profile">
                <div class="profile-picture">
                    <img class="profile-picture" src={image} alt="" />
                </div>
                <div >
                    <h2 class="user-name">{userName}</h2>
                    <span>{name}</span>
                </div>
            </div>
            <span>Seguir</span>
        </div>
    )
}