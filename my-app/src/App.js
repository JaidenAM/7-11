import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Read Manga/Anime Content NOW
        </p>
        <ButtonGroup variant="contained" aria-label="outlined button group" size="large">
       <Button
       href="https://global.bookwalker.jp/"
       target="_blank"
       rel="noopener noreferrer"
       >Buy Manga</Button>
       <Button
       href="https://www.viz.com/shonenjump?wpsrc=Google%20AdWords&wpcid=15938988164&wpsnetn=g&wpkwn=&wpkmatch=&wpcrid=591000092319&wpscid=132563276579&wpkwid=dsa-437115340933&gclid=EAIaIQobChMI8eqhtvnw-AIVSOTICh1KAwP0EAAYASAAEgICafD_BwE"
       target="_blank"
       rel="noopener noreferrer"
       >Read Manga</Button>
      </ButtonGroup>
        <Button variant="contained"
        size="small"
        color="secondary"
        href="https://www.crunchyroll.com/welcome?utm_source=paid_cr&utm_medium=google-search&utm_campaign=conversion&utm_term=crunchyroll&referrer=paid_cr_google-search_conversion&gclid=EAIaIQobChMIg4Dylvnw-AIVAo_ICh1BTwFiEAAYASAAEgKCFPD_BwE"
        target="_blank"
        rel="noopener noreferrer"
        >Anime</Button>
        <TextField
         hiddenLabel
         color="success"
         id="filled-hidden-label-small"
         defaultValue="Search"
         variant="filled"
         size="medium"
         />
        <a
          className="App-link"
          href="https://myanimelist.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find More
        </a>
      </header>
    </div>
  );
}

export default App;
