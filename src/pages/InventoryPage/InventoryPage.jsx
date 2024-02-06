import './InventoryPage.scss';
import SideNav from '../../components/SideNav/SideNav';

export default function InventoryPage({ access, token }){
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='inventory-card'>
                    <h2 className='inventory-card__title'>Inventory</h2>

                </div>
            </section>
        </main>
    )
}