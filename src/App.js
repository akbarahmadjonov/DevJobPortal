import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./main.scss";
import { Home } from "./Pages";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { DevProfile } from "./Pages/DevProfile";
import { Jobs } from "./Pages/Jobs/Jobs";
import { CompanyProfile } from "./Pages/CompanyProfile/CompanyProfile";
import { JobsNested } from "./Pages/CompanyProfile/Nested/JobsNested";
import { TimeOffNested } from "./Pages/CompanyProfile/Nested/TimeOffNested";
import { Evaluation } from "./Pages/CompanyProfile/Nested/EvaluationNested";
import { TalentPool } from "./Pages/CompanyProfile/Nested/TalentPool";

const App = () => {
  //Test
  let hours = 5;
  let now = new Date().getTime();
  let setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }

  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/devs-profile" element={<DevProfile />} />
          <Route path="/comprofile" element={<CompanyProfile />}>
            <Route index element={<JobsNested />} />
            <Route path="jobs" element={<JobsNested />} />
            <Route path="timeoff" element={<TimeOffNested />} />
            <Route path="evaluation" element={<Evaluation />} />
            <Route path="talentpool" element={<TalentPool />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
};

export default App;
