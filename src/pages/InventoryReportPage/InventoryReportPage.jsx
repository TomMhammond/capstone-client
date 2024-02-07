import { useEffect, useState } from 'react';
import SideNav from '../../components/SideNav/SideNav';
import './InventoryReportPage.scss';
import axios from 'axios';
import InventoryOrder from '../../components/InventoryOrder/InventoryOrder';

export default function InventoryReportPage({ access, token }){
    const [inventoryData, setInventoryData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/inventory`);
            setInventoryData(response.data);
        };
        fetchData();
    }, []);

    if(!inventoryData){
        return <></>
    }

    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='inventory-report-card'>
                    <h2 className='inventory-report-card__title'>To Order</h2>
                    <p className='inventory-report-card__subtitle'>Products to Order:</p>
                    {inventoryData.map((inventory) => (
                        <InventoryOrder key={inventory.id} inventory={inventory}/>
                    ))}
                </div>
            </section>
        </main>
    )
}