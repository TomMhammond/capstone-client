import axios from 'axios';
import SideNav from '../../components/SideNav/SideNav';
import './SinglePetPage.scss';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Medical from '../../components/Medical/Medical';

export default function SinglePetPage({ token, access }){
   const [ pet, setPet ] = useState(null);
   const params = useParams();
   const id = params.id;
   const navigate = useNavigate();

   useEffect(() => {
    if(!sessionStorage.authToken){
        return navigate('/');
       } 
    const fetchPetData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/pets/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setPet(response.data);
    }
    fetchPetData();
   },[])

   
   if(!pet){
    return <></>
   }

   let temperment;
   let tempermentClass;
   let statusClass;

   if(pet.is_aggressive === 0){
    tempermentClass = 'pet-card--docile';
    temperment = 'Docile';
   } else if(pet.is_aggressive === 1){
    tempermentClass= 'pet-card--aggressive';
    temperment = 'Aggressive';
   }

   if(pet.is_deceased === 1){
    statusClass = 'pet-card--deceased'
   } else {
    statusClass = 'pet-card--active'
   }

   const editClickHandler = () => {
        navigate(`/edit/pet/${id}`)
   }

   const delClickHandler = async () => {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/pets/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        navigate('/pets')
   }
   
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className={`pet-card ${statusClass}`}>
                    <div className='pet-card__head'>
                        <h2 className='pet-card__title'>{pet.name}</h2>
                        <p className={`${tempermentClass}`}>{temperment}</p>
                    </div>
                    <div className='pet-card__container'>
                        <div className='pet-card__wrapper'>
                            <div className='pet-card__subcontainer'>
                                <p className='pet-card__label'>Species:</p>
                                <p className='pet-card__species'>{pet.species}</p>
                            </div>
                            <div className='pet-card__subcontainer'>
                                <p className='pet-card__label'>Breed: </p>
                                <p className='pet-card__breed'>{pet.breed}</p>
                            </div>
                            <div className='pet-card__subcontainer'>
                                <div className='pet-card__button' onClick={editClickHandler}>Edit</div>
                                <div className='pet-card__button pet-card__button--del' onClick={delClickHandler}>Delete</div>
                            </div>
                        </div>
                        <div className='pet-card__wrapper'>
                            <div className='pet-card__subcontainer'>
                                <p className='pet-card__label'>Colour:</p>
                                <p className='pet-card__colour'>{pet.colour}</p>
                            </div>
                            <div className='pet-card__subcontainer'>
                                <p className='pet-card__label'>Weight: </p>
                                <p className='pet-card__weight'>{`${pet.weight} lbs`}</p>
                            </div>
                            <div className='pet-card__subcontainer'>
                                <p className='pet-card__label'>Age: </p>
                                <p className='pet-card__age'>TBD</p>
                            </div>
                        </div>
                    </div>
                    <h2 className='pet-card__title'>Medical Chart</h2>
                    <Medical id={id} token={token}/>
                </div>
            </section>
        </main>
    )
}