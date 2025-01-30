import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import SettingsInputSVideoIcon from '@mui/icons-material/SettingsInputSVideo';
import { TextLabelWithIcon } from './TextLabelWithIcon';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import { TopSearchBar } from '../../components/TopSearchBar';

export default function ButtonAppBar() {
  const items = [
    { path: '/catalog', label: 'Catalog', icon: <ListIcon /> },
    { path: '/api-docs', label: 'API Docs', icon: <SettingsInputSVideoIcon /> },
    { path: '/docs', label: 'Docs', icon: <LibraryBooksIcon /> },
    { path: '/create', label: 'Create', icon: <AddCircleOutlineIcon /> },
    { path: '/settings', label: 'Settings', icon: <SettingsIcon /> },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {items.map(item => (
            <Link to={item.path}>
              <MenuItem>
                <TextLabelWithIcon>
                  {item.icon ? item.icon : null}
                  <Typography textAlign="center">{item.label}</Typography>
                </TextLabelWithIcon>
              </MenuItem>
            </Link>
          ))}
          <TopSearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
