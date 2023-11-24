import { Navigate, Route, Routes } from "react-router-dom";
import {UsersPage} from "../EcoApp/pages/UsersPage"; 

export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/users/*" element={<UsersPage/>}/>
            <Route path="/*" element={<Navigate to="/users"/>}/>
        </Routes>
    )
}
