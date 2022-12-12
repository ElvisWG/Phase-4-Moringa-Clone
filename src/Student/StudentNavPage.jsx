import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import StudentList from "../components/Pages/StudentList";
import Reviews from "../components/Pages/reviews";
import CreateAssessment from "../components/Pages/CreateAssement";
import InvitationForm from "../components/Pages/InvitationForm";
import Question from "./Quiz";


function NavPage() {
    return (


            <Routes>
                <Route path="/*" element={<Dashboard/>}/>
                <Route path="/createassessment" element={<CreateAssessment/>}/>
                <Route  path="/studentlist" element={<StudentList/>}/>
                <Route  path="/invitationform" element={<InvitationForm />}/>
                <Route  path="/reviews" element={<Reviews/>}/>
                <Route path="questions" element={<Question />} />
            </Routes>

    )
}
export default NavPage;
