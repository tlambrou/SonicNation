import React from "react";
import Search from "./search.jsx";
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function App () {
  return (
    <MuiThemeProvider>
      <Search />
    </MuiThemeProvider>
  );
}
