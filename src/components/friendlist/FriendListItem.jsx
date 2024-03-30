import css from "./FriendList.module.css";

const FriendListItem = ({avatar, name, isOnline}) => {
    const status = isOnline ? "is-online" : "is-offline";
    return (
        <div>
            <img src={avatar} alt={name} width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={css[status]}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}

export default FriendListItem;