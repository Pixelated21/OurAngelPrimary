import Home from './pages/Home'
import {Route, Routes} from "react-router-dom";
import {AdminLayout} from "../../layout/AdminLayout";
import Voucher from "./pages/Voucher";
import Parent from "./pages/Parent";
import Student from "./pages/Student";


const Admin = () => {
    return (
        <Routes>
            <Route element={<AdminLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='voucher' element={<Voucher/>}/>
                <Route path='parent' element={<Parent/>}/>
                <Route path='student' element={<Student/>}/>
            </Route>
        </Routes>
        )
}



export default Admin