import '../InventoryPage/InventoryPage.scss';
// import './AuditInventoryPage.scss'
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
    
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='inventory-card'>
                    <h2 className='inventory-card__title'>Inventory</h2>
                    {inventoryData.map((inventory) => (
                        <AuditInventory inventory={inventory} key={inventory.id}/>
                    ))}
                    {/* <form onSubmit={submitHandler}>
                        {inventoryData.map((inventory) => (
                            <div className='inventory-form' key={inventory.id}>
                                <p className='inventory-form__item'>{inventory.item}</p>
                                <p className='inventory-form__cat'>{inventory.category}</p>
                                <p className='inventory-form__onHand'>{`On Hand: ${inventory.amount_on_hand}`}</p>
                                <p className='inventory-form__expected'>{`Threshold: ${inventory.expected_amount}`}</p>
                                <label className='inventory-form__label' htmlFor={`count${inventory.id}`}>Counted:</label>
                                <input className='inventory-form__input' type='text' name={`count${inventory.id}`} id={`count${inventory.id}`} placeholder='0'></input>
                            </div>
                        ))}
                        <button className='inventory-card__button--audit' onSubmit={submitHandler}>Order</button>
                    </form> */}
                </div>
            </section>
        </main>
    )
}