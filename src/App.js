import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./screen/Landing";

import FormContextProvider from "./context/FormContext";
import {HomepageLayout} from "./layout/HomepageLayout";
import Home from './screen/admin/index'
import {AdminLayout} from "./layout/AdminLayout";
import Admin from "./screen/admin/index";

const App = () => {
   return (
       <div>
           <FormContextProvider>
               <Router>
                   <Routes>
                       <Route element={<HomepageLayout/>}>
                           <Route index element={<Landing/>}/>
                           <Route path='/admin/*' element={<Admin/>}/> />
                       </Route>


                   </Routes>
               </Router>
           </FormContextProvider>
       </div>
   )
}

export default App