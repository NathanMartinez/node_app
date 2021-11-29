import { useState } from "react";
import axios from "axios";
import "./App.css";

async function getUsers() {
  try {
    const response = await axios.get("http://localhost:5000/users");
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
}

async function addUser(data) {
  try {
    const response = await axios.post("http://localhost:5000/users", data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const defaultData = { name: "", age: 0 };
  const [data, setData] = useState(defaultData);
  const [userList, setUserList] = useState([])

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "age") {
      value = +value;
    }
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(data);
    setData(defaultData);
  };
  const showUsers = async () => {
    let users = await getUsers();
    setUserList(users)
    console.log(userList);
  };
  return (
    <div className="App">
      <div className="form-container">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Username</label>
            <input type="text" name="name" onChange={handleChange} value={data.name} />
          </div>
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <input type="text" name="age" onChange={handleChange} value={data.age} />
          </div>
          <button>Submit</button>
        </form>
      </div>

      <div>
        <button onClick={showUsers}>Get Users</button>
        <ul>
          {
            userList.map(user => (<li key={user._id}>Name: {user.name} Age: {user.age}</li>))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
