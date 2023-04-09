import React from "react";
import styles from "./UserTitle.module.scss";
import { IGithubUser } from "../../../../types/user";

type IUserTitleProps = Pick<IGithubUser, "name" | "login" | "created_at">;

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const UserTitle: React.FC<IUserTitleProps> = ({ created_at, login, name }) => {
  const joinedDay = localDate.format(new Date(created_at));
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDay}</span>
    </div>
  );
};

export default UserTitle;
