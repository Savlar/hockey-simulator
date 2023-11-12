import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import Players from './components/Players/Players';
import Inbox from './components/Inbox/Inbox';

function App() {
  return (
    <section>
      <BrowserRouter>
        <Navbar />
        <Box sx={{ display: 'grid', gridTemplateColumns: '200px 87%' }}>
          <Sidebar />
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Players" element={<Players />}></Route>
            <Route path="/Inbox" element={<Inbox />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </section>
  );
}

export default App;
