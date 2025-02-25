import { useState } from "react";
import "./App.css";

type Message = {
  message: string;
};

type Good = {
  Good: string;
};

type User = {
  id: number;
  name: string;
};

function App() {
  const [message, setMessage] = useState<Message>({ message: "" });
  const [good, setGood] = useState<Good>({ Good: "" });
  const [users, setUsers] = useState<User[]>([]);

  const handleRequestToRoot = async () => {
    const data = await fetch("http://localhost:8080/");
    const dataJson = await data.json();
    setMessage(dataJson);
  };

  const handleRequestToAm = async () => {
    const data = await fetch("http://localhost:8080/am", { method: "POST" });
    const dataJson = await data.json();
    setGood(dataJson);
  };

  const handleRequestToUsers = async () => {
    const data = await fetch("http://localhost:8080/api/users");
    const dataJson = await data.json();
    setUsers(dataJson);
  };

  return (
    <div>
      <h1>Titles</h1>
      <button onClick={handleRequestToRoot}>Request:/</button>
      <p>Message:{message.message}</p>

      <button onClick={handleRequestToAm}>Request:/am</button>
      <p>Good:{good.Good}</p>

      <button onClick={handleRequestToUsers}>Request:/am</button>
      <p>User List</p>
      {users.map((user) => (
        <>
          <p>ID:{user.id}</p>
          <p>Name:{user.name}</p>
        </>
      ))}
    </div>
  );
}

export default App;
