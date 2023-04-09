import React from "react";
import { IGithubUser } from "../../../../types/user";
import styles from "./UserInfo.module.scss";

type UserStatProps = Pick<
  IGithubUser,
  "public_repos" | "followers" | "following"
>;

const UserStat: React.FC<UserStatProps> = ({
  public_repos,
  followers,
  following,
}) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{public_repos}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};

export default UserStat;
