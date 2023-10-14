
import React from 'react';
import SignUp from "./Views/SignUp";
import { Route, Routes} from "react-router-dom";
import LogIn from "./Views/LogIn";
import FindBooks from "./Views/findBooks"
import WantToReadList from "./Views/WantToReadList"
import { RequireAuth } from 'react-auth-kit'
import './App.css'

function App() {

  return (
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/findbooks"
                 element={
                   <RequireAuth loginPath={"/login"}>
                     <FindBooks />
                   </RequireAuth>
                 }
          />
          <Route exact path="/WantToRead"
                 element={
                   <RequireAuth loginPath={"/login"}>
                     <WantToReadList />
                   </RequireAuth>
                 }
          />
        </Routes>
  );
}

export default App;
