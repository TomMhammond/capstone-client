import '../InventoryPage/InventoryPage.scss';
import SideNav from '../../components/SideNav/SideNav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuditInventory from '../../components/AuditInventoryForm/AuditInventoryForm';

export default function AuditInventoryPage({ access, token }){
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

    const submitHandler = (e) => {
        e.preventDefault();
        const formEl = e.target;

        const count1 = formEl.count1.value;
        const count2 = formEl.count2.value;
        const count3 = formEl.count3.value;

        console.log(count1, count2, count3)
        
    }

    const clickHandler = () => {
        navigate('/inventory/report')
    }
    
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='inventory-card'>
                    <h2 className='inventory-card__title'>Inventory</h2>
                    {inventoryData.map((inventory) => (
                        <AuditInventory inventory={inventory} key={inventory.id}/>
                    ))}
                    <div className='inventory-card__button--submit' onClick={clickHandler}>Submit</div>
                </div>
            </section>
        </main>
    )
}