import React, {useEffect,useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const UserListPage =({setUserId,history})=>{
    const [data, setData] = useState([]);
    const [active,setActive]=useState(1);
    let items = [];

    const paginationClickHandler=(e)=>{
        setActive(parseInt(e.target.text));
        fetchData((parseInt(e.target.text)*50)-50);
    };

    const changeRowColor =(e)=>{
        e.target.parentElement.style.backgroundColor='red';
    };

    const resetRowColor=(e)=>{
        e.target.parentElement.style.backgroundColor='white';
    };

    const rowClickHandler =(id)=>{
        setUserId(id);
        history.push("/profile");
    };

    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item
                onClick={paginationClickHandler}
                key={number}
                active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const fetchData=(startIndex)=>{
            axios.get(`http://localhost:5000/users/${startIndex}`)
                .then(res => {
                    setData(res.data.users);
                });
        };

    useEffect(() => {
        fetchData(0);
    }, []);


    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            </Navbar>
            <h1>User Statistics</h1>
            <Table responsive>
                <thead>
                <tr>
                    <th>id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>email</th>
                    <th>gender</th>
                    <th>ip_address</th>
                    <th>total_clicks</th>
                    <th>total_page_views</th>
                </tr>
                </thead>
                <tbody>
                {data.map((user)=>{
                    return (
                        <tr
                            onMouseLeave={resetRowColor}
                            onMouseOver={changeRowColor}
                            onClick={(e)=>rowClickHandler(user.id)}
                            key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.ip_address}</td>
                            <td>{user.total_clicks}</td>
                            <td>{user.total_page_views}</td>
                        </tr>
                        )
                })}
                </tbody>
            </Table>
            <Pagination size="sm">{items}</Pagination>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            </Navbar>
        </>
    )
};

export default  withRouter(UserListPage);
