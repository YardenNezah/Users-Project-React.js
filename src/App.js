import axios from 'axios'
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import UsersList from './UsersList';
import PageSelector from './PageSelector';
import UserDetails from './UserDetails';
import './styles/App.css'

function App() {
  //Fetching and assigning the data:
  const [usersData, setUsersData] = useState([]);

  const fetchData = async () => {
    const results = await axios.get("https://randomuser.me/api/?seed=a&results=100");
    setUsersData(results.data.results);
  }

  useEffect(() => {
    fetchData()
  }, []);

  //Routes manager:
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UsersList usersData={usersData} />} />
        <Route exact path="/" element={<PageSelector />} />
        <Route exact path="/page/:page" element={<UsersList usersData={usersData} />} />
        <Route exact path="/page/:page" element={<PageSelector />}/>
        <Route exact path="/users/:username" element={<UserDetails usersData={usersData} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
