import css from "./Profile.module.css";

const Profile = ({ userInfo }) => {
  const { username, tag, location, avatar, stats } = userInfo;

  return (
    <div className={css.usercard}>
      <div className={css.userTop}>
        <img className={css.userAvatar} src={avatar} alt="User avatar" />
        <div>
          <p className={css.userName}>{username}</p>
          <p className={css.userTag}>@{tag}</p>
          <p className={css.userLocation}>{location}</p>
        </div>
      </div>
       <ul className={css.socialData}>
        <li className={css.socialColumn}>
          <span className={css.socialColumnName}>Followers</span>
          <span className={css.socialDataNumb}>{stats.followers}</span>
        </li>
        <li className={css.socialColumn}>
          <span className={css.socialColumnName}>Views</span>
          <span className={css.socialDataNumb}>{stats.views}</span>
        </li>
        <li className={css.socialColumn}>
          <span className={css.socialColumnName}>Likes</span>
          <span className={css.socialDataNumb}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
