import React  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RegistrationForm from './components/Register';
// import MyComponent from './components/Mycomponent';
import SampleRegForm from './components/SampleRegForm';
import SampleMyComponent from './components/SampleMyComponent';
import AllCompanyName from './components/AllCompanyName';
import PropertyDetails from './components/PropertyDetails';
import PropertyPhotoForm from './components/PropertyPhoto';
import TenantForm from './components/TenantForm';
import PayrollForm from './components/Payroll';
import InventoryForm from './components/InventoryItem';
import DayBook from './components/DayBook';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SampleRegForm/>}></Route>
      <Route path="/allCompanyName" element={<AllCompanyName/>}></Route>
      <Route path="/comapany-details/:id" element={<PropertyDetails/>}></Route>
      <Route path="/properties" element={<SampleMyComponent/>}></Route>
      <Route path="/property-photo/:id" element={<PropertyPhotoForm/>}></Route>
      <Route path="/tenant" element={<TenantForm/>}></Route>
      <Route path="/payroll" element={<PayrollForm/>}></Route>
      <Route path="/inventory" element={<InventoryForm/>}></Route>
      <Route path="/daybook" element={<DayBook/>}></Route>

      {/* <Route path="/" element={<RegistrationForm/>}></Route> */}
      {/* <Route path="/show-company" element={<RegistrationForm/>}></Route> */}
      {/* <Route path="/properties" element={<MyComponent/>}></Route> */}

      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

