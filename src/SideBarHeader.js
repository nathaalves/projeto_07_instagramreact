export default function SideBarHeader({userName, name}) {
    
    return (
        <header class="side-bar-header">
            <div class="profile-picture" href="">
                <img class="profile-picture" src="images/sam.jpg" alt="" />
            </div>
            <div href="">
                <span class="user-name">{userName}</span>
                <span>{name}</span>
            </div>
        </header>
    )
}