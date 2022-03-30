import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./screen/Landing";

import FormContextProvider from "./context/FormContext";
import {HomepageLayout} from "./layout/HomepageLayout";
import Home from './screen/admin/index'

const App = () => {
   return (
       <div>
           <FormContextProvider>
               <Router>
                   <Routes>
                       <Route element={<HomepageLayout/>}>
                           <Route path='/' element={<Landing/>}/>
                           <Route path='/admin/*' element={<Home/>}/> />

                       </Route>
                   </Routes>
               </Router>
           </FormContextProvider>
       </div>
   )
}

export default App