import React from 'react';
import { MainPage } from "./Pages/MainPage/MainPage";
import { MuseumPage } from "./Pages/MuseumPage/MuseumPage";
import { FestivalPage } from "./Pages/FestivalPage/FestivalPage";
import { FriendsPage } from "./Pages/FriendsPage/FriendsPage";
import { ConcertPage } from "./Pages/ConcertPage/ConcertPage";
import { BelarussianTradePage } from "./Pages/BelarussianTradePage/BelarussianTradePage";
import { KirmashPage } from "./Pages/KirmashPage/KirmashPage";
import { PresidentPage } from "./Pages/PresidentPage/PresidentPage";
import { ProgramPage } from "./Pages/ProgramPage/ProgramPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import './../src/App.scss';

export class App extends React.Component {
  render() {
    return (
      <>
        {/* <Toaster /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/museum" element={<MuseumPage />} />
            <Route path="/festival" element={<FestivalPage />} />
            <Route path="/friends/:year" element={<FriendsPage />} />
            <Route path="/concert/:year" element={<ConcertPage />} />
            <Route path="/belarussian-trade/:year" element={<BelarussianTradePage />} />
            <Route path="/kirmash/:year" element={<KirmashPage />} />
            <Route path="/president/:year" element={<PresidentPage />} />
            <Route path="/program/:year" element={<ProgramPage />} />
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
