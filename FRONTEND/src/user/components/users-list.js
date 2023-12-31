import React from "react";

import Card from "../../shared/components/UI/Card";
import UserItem from "./user-item";
import styles from "./users-list.module.css";
const UsersList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
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
        placeCount={user.places.length}
      />
    );
  });

  return <ul className={styles["users-list"]}>{mappedUsers}</ul>;
};

export default UsersList;
