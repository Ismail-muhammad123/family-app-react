import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import App from "../../App";
import Families from "../../pages/Family/Families";
import Members from '../../pages/Members/Members';
import FamilyGroups from '../../pages/groups/FamilyGroups';
import Properties from '../../pages/Properties/Properties';
import Projects from '../../pages/Projects/Projects';
import Expenses from '../../pages/Expenses/Expenses';



export default function RouterFile() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<App/>} />
                <Route exact path="/families" element={<Families/>} />
                <Route exact path="/members" element={<Members/>} />
                <Route exact path="/family-groups" element={<FamilyGroups/>} />
                <Route exact path="/properties" element={<Properties/>} />
                <Route exact path="/projects" element={<Projects/>} />
                <Route exact path="/expenses" element={<Expenses/>} />
            </Routes>
        </Router>
  )
}
