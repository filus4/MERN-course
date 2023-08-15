import React from "react";

import UserItem from "./user-item";

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
    <UserItem
      key={user.id}
      id={user.id}
      image={user.image}
      name={user.name}
      placeCount={user.places}
    />;
  });

  return <ul>{mappedUsers}</ul>;
};

export default UsersList;
