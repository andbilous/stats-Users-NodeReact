import React, {useEffect, useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Legend from "recharts/lib/component/Legend";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import axios from "axios";
import {Button} from "react-bootstrap";
import './ProfilePage.scss';


const ProfilePage =({currentUserId})=>{
    const [data, setData] = useState([]);
    const [fromDate,setFromDate]=useState(0);
    const [toDate,setToDate]=useState(0);

    const fetchData=(dateFrom,dateTo)=>{
        axios.get(`http://localhost:5000/user/${currentUserId}/${dateFrom}/${dateTo}`)
            .then(res => {
                setData(res.data.data);
            });
    };

    const handleChangeRange = () => {
        fetchData(new Date(fromDate),new Date(toDate));
    };

    useEffect(() => {
        let dateTo = new Date(2019,9,15);
        let dateFrom =  new Date(dateTo.getTime()-(60*60*24*7*1000));
        fetchData(dateFrom,dateTo);
    }, [fetchData]);

    return (
       <>
           <section className='header'>
           </section>
           <h1>{data.first_name} {data.last_name}</h1>
           <section style={
               {
                   margin:"auto",display:"grid",flexDirection:"column",alignItems:'center',
                   justifyContent:'center',
                   padding:'20px',
                   border:'1px solid black',width:'80%'
               }
           }>
               <div style={{
                   display:"flex",
                   justifyContent:'flex-start',
                   margin:'auto'
               }}>
                   <h5>From</h5>
                   <DayPickerInput onDayChange={value => setFromDate(value)} />
                   <h5>To</h5>
                   <DayPickerInput onDayChange={value => setToDate(value)} />
                   <Button onClick={handleChangeRange}>Set Range</Button>
               </div>
               <h5>Clicks</h5>
               <LineChart
                   width={900}
                   height={300}
                   data={data.stats}>
                   <CartesianGrid  strokeDasharray="3 3" />
                   <XAxis dataKey="date"  />
                   <YAxis />
                   <Tooltip />
                   <Legend />
                   <Line type="monotone" dataKey="clicks" stroke="#8884d8" activeDot={{ r: 8 }} />
               </LineChart>
               <h5>Views</h5>
               <LineChart
                   width={900}
                   height={300}
                   data={data.stats}>
                   <CartesianGrid  strokeDasharray="3 3" />
                   <XAxis dataKey="date"  />
                   <YAxis />
                   <Tooltip />
                   <Legend />
                   <Line type="monotone" dataKey="views" stroke="red" activeDot={{ r: 8 }} />
               </LineChart>
           </section>
           <Navbar bg="primary" variant="dark">
               <Navbar.Brand href="#home">Navbar</Navbar.Brand>
           </Navbar>
           </>
    )
};

export default  ProfilePage;
