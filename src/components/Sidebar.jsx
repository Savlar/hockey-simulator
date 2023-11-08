import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StadiumIcon from '@mui/icons-material/Stadium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import EmailIcon from '@mui/icons-material/Email';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import Badge from '@mui/material/Badge';
import { useState } from 'react';

import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  const [openTables, setOpenTables] = useState(false);
  const [openTactics, setOpenTactics] = useState(false);
  const [openTransfers, setOpenTransfers] = useState(false);

  const handleClickTables = () => {
    setOpenTables(!openTables);
  };

  const handleClickTactics = () => {
    setOpenTactics(!openTactics);
  };

  const handleClickTransfers = () => {
    setOpenTransfers(!openTransfers);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        boxShadow: 3,
        // width: '200px',
        // height: '90vh',
      }}
    >
      {/* DOMOV */}
      <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Domov" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      {/* Pošta */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Badge badgeContent={4} color="primary">
                <EmailIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Pošta" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* Kalendár */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Kalendár" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* Štatistiky */}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickTables}>
            <ListItemIcon>
              <PivotTableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Štatistiky" />
            {openTables ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={openTables} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Liga" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTables} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Hráči" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTables} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Klub" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTables} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Ostatné ligy" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* Mužstvo */}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickTactics}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Mužstvo" />
            {openTactics ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
      </List>
      <Link to="/Players" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Collapse in={openTactics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Hráči" />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>
      <Collapse in={openTactics} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Formácie" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTactics} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Tréningy" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTactics} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Zmluvy" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* ZÁZEMIE */}
      <Link to="/Výroky" style={{ textDecoration: 'none', color: 'inherit' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#quotes">
              <ListItemIcon>
                <StadiumIcon />
              </ListItemIcon>
              <ListItemText primary="Zázemie" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      {/* Financie */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#dresy">
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Financie" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* Zamestnanci */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#dresy">
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Zamestnanci" />
          </ListItemButton>
        </ListItem>
      </List>
      {/* Prestupy */}
      <List onClick={handleClickTransfers}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <CompareArrowsIcon />
            </ListItemIcon>
            <ListItemText primary="Prestupy" />
            {openTransfers ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Voľní hráči" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="História" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Ponuky" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Výmeny" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openTransfers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Skauting" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* Klub */}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#dresy">
            <ListItemIcon>
              <SportsHockeyIcon />
            </ListItemIcon>
            <ListItemText
              primary="Klub
            "
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
