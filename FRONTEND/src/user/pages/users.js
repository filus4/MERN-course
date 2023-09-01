import React, { useEffect, useState } from "react";

import UsersList from "../components/users-list";
import ErrorModal from "../../shared/components/UI/ErrorModal";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";

const Users = () => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }

        setFetchedUsers(data.users);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <ErrorModal error={error} onClear={() => setError(false)} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && fetchedUsers && <UsersList items={fetchedUsers} />}
    </>
  );
};

export default Users;
