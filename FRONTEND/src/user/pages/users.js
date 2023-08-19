import React from "react";

import UsersList from "../components/users-list";

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Marcel",
    image:
      "https://static.planetminecraft.com/files/image/minecraft/project/2021/199/14520222-aincradrender_xl.webp",
    places: "3",
  },
];

const Users = () => {
  return (
    <>
      <UsersList items={DUMMY_USERS} />
    </>
  );
};

export default Users;
