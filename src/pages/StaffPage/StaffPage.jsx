import './StaffPage.scss';
import SideNav from '../../components/SideNav/SideNav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Staff from '../../components/Staff/Staff';

export default function StaffPage({ token, access}){
    const [ staffData, setStaffData ] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/')
         }

         const fetchStaffData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/staff`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setStaffData(response.data);
         }
         fetchStaffData();
    }, [])

    if(!staffData){
        return <></>
    }

    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='staff-card'>
                    <h2 className='staff-card__title'>Staff</h2>
                    {staffData.map((staff) => (
                        <Staff key={staff.id} staff={staff}/>
                    ))}
                </div>
            </section>
        </main>
    )
}