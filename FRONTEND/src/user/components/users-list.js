import React from "react";

import UserItem from "./user-item";
import styles from "./users-list.module.css";
const UsersList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  const mappedUsers = items.map((user) => {
    return (
      <UserItem
        key={user.id}
        id={user.id}
        image={user.image}
        name={user.name}
        placeCount={user.places}
      />
    );
  });

  return <ul className={styles.usersList}>{mappedUsers}</ul>;
};

export default UsersList;
