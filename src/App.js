import Main from './components/Main';
import { Routes,Route} from "react-router-dom"
import { ROUTE_CONSTANTS } from './components/core/constants';
import HourlyData from "./components/HourlyData"
import { Form,Input } from "antd";
import { useState } from 'react';

import './App.css';


function App() {
  const [city, setCity] = useState("");
  const [form] = Form.useForm();
  return (

    <div className="App">
       <div className="divInput">
        <Form
          form={form}
          onFinish={({ city }) => {
            form.resetFields();
            setCity(city);
          }}
        >
          <Form.Item name="city">
            <Input placeholder="Search by city" />
          </Form.Item>
        </Form>
      </div>
      <Routes>
        <Route path='/' element= { <Main city={city}/> }> </Route>  
        <Route path = {`${ROUTE_CONSTANTS.CARD}/:day`} element={<HourlyData city={city}  />} />
      </Routes> 
    </div>
  );
}

export default App;
