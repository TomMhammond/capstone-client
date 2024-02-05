import { useParams } from 'react-router-dom';
import './SingleStaffPage.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideNav from '../../components/SideNav/SideNav';

export default function SingleStaffPage({ token, access}){
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    const [ staff, setStaff ] = useState(null);

    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/');
        }

        const fetchStaffData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/staff/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setStaff(response.data);
        }
        fetchStaffData();
    }, [])

    if(!staff){
        return <></>
    }

    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='staff-card'>
                <h2 className='staff-card__title'>{`${staff.first_name} ${staff.last_name}`}</h2>
                <div className='staff-card__container'>
                        <div className='staff-card__wrapper'>
                            <div className='staff-card__subcontainer'>
                                <p className='staff-card__label'>Position:</p>
                                <p className='staff-card__email'>{staff.position}</p>
                            </div>
                            <div className='staff-card__subcontainer'>
                                <p className='staff-card__label'>Hire Date: </p>
                                <p className='staff-card__phone'>{staff.hire_date}</p>
                            </div>
                            <div className='staff-card__subcontainer'>
                                <div className='staff-card__button' >Edit</div>
                                <div className='staff-card__button--del staff-card__button' >Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}