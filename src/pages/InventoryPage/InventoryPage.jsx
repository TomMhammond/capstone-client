import './InventoryPage.scss';
import SideNav from '../../components/SideNav/SideNav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Inventory from '../../components/Inventory/Inventory';
import { useNavigate } from 'react-router-dom';

export default function InventoryPage({ access, token }){
    const [ inventoryData, setInventoryData ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInventoryData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/inventory`);
            setInventoryData(response.data);
        }
        fetchInventoryData();
    }, []);

    if(!inventoryData){
        return <></>
    }

    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/inventory/audit');
    }
    
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='inventory-card'>
                    <h2 className='inventory-card__title'>Inventory</h2>
                    {inventoryData.map((inventory) => (
                        <Inventory key={inventory.id} inventory={inventory}/>
                    ))}
                    <button className='inventory-card__button--audit' onClick={clickHandler}>Audit</button>
                </div>
            </section>
        </main>
    )
}