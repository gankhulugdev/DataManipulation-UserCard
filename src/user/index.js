import { useEffect, useState } from "react";
import axios from "axios";
import User from "./user";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(apiEndpoint).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setUsers(res.data);
      }
    });
  }, []);

  return (
    <div style={{display: 'flex', flexWrap: "wrap"}}>
      {users.map((user, idx) => {
        return <User key={idx} user={user} color={subscriptionColors[idx]} />;
      })}
    </div>
  );
}

const apiEndpoint = "https://random-data-api.com/api/v2/users?size=4";
const subscriptionColors = ["#2a71b0", "#008f5c", "#fec60c", "#c5047e"];
