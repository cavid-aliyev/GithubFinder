import React from "react";
import styles from "./UserCard.module.scss";
import { UserInfo, UserStat, UserTitle } from "./components";
import { IGithubUser } from "../../types/user";

const UserCard: React.FC<IGithubUser> = (props) => {
  const {
    login,
    avatar_url,
    created_at,
    bio,
    name,
    followers,
    following,
    public_repos,
    blog,
    company,
    location,
    twitter_username,
  } = props;
  return (
    <div className={styles.userCard}>
      <img src={avatar_url} alt={login} className={styles.avatar} />
      <UserTitle created_at={created_at} login={login} name={name} />
      <p className={styles.userBio}>{bio || "This profile has no bio"}</p>
      <UserStat
        public_repos={public_repos}
        followers={followers}
        following={following}
      />
      <UserInfo
        blog={blog}
        company={company}
        location={location}
        twitter_username={twitter_username}
      />
    </div>
  );
};

export default UserCard;
