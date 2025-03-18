import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion'
import './UsersList.css';
import { tagVariants } from "@/utils/animations";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <motion.div className="user-conatiner"
    initial="offscreen"
                  whileInView={"onscreen"}
                  variants={tagVariants}
                  style={{
                    fontSize: '1.9rem',
                    textAlign: 'center',
                    lineHeight: '3.5rem',
                    textTransform: 'capitalize'
                  }}
    >
      <h2 className="user-wrapper">User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-name">{user.name}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default UsersList;
