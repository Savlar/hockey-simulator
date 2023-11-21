import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import Players from './components/Players/AllPlayers/Players';
import Inbox from './components/Inbox/Inbox';
import Facilities from './components/Facilities/Facilities';

import { createContext, useState } from 'react';
import Formations from './components/Players/Formations/Formations';
import Overview from './components/Players/Overview/Overview';
import Club from './components/Club/Club';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [money, setMoney] = useState(235000);
  const [moneyMonthly, setMoneyMonthly] = useState(17750);

  // const updateMoney = (amount) => {
  //   setMoney((prevMoney) => prevMoney + amount);
  // };

  return (
    <GlobalContext.Provider
      value={{ money, setMoney, moneyMonthly, setMoneyMonthly }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function App() {
  return (
    <section>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar />
          <Box sx={{ display: 'grid', gridTemplateColumns: '200px 87%' }}>
            <Sidebar />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Players" element={<Players />} />
              <Route path="/Inbox" element={<Inbox />} />
              <Route path="/Facilities" element={<Facilities />} />
              <Route path="/Formations" element={<Formations />} />
              <Route path="/Overview" element={<Overview />} />
              <Route path="/Club" element={<Club />} />
              {/* DEFAULT */}
              <Route index element={<Home />} />
            </Routes>
          </Box>
        </GlobalProvider>
      </BrowserRouter>
    </section>
  );
}

export default App;
