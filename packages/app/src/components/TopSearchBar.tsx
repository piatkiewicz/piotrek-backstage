import React from 'react';
import { makeStyles } from '@material-ui/core';
import { HomePageSearchBar } from '@backstage/plugin-search';

export const TopSearchBar = () => {
  //from https://github.com/backstage/demo/blob/master/packages/app/src/components/home/HomePage.tsx

  const useStyles = makeStyles(theme => ({
    searchBarInput: {
      maxWidth: '60vw',
      margin: 'auto',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '50px',
      boxShadow: theme.shadows[1],
    },
    searchBarOutline: {
      borderStyle: 'none',
    },
  }));

  const classes = useStyles();

  return (
    <HomePageSearchBar
      InputProps={{
        classes: {
          root: classes.searchBarInput,
          notchedOutline: classes.searchBarOutline,
        },
      }}
      placeholder="Search"
    />
  );
};
