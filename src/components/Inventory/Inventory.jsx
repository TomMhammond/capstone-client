import './Inventory.scss';

export default function Inventory({ inventory }){
    return(
        <div className='inventory'>
            <p className='inventory__item'>{inventory.item}</p>
            <p className='inventory__cat'>{inventory.category}</p>
            <p className='inventory__onHand'>{inventory.amount_on_hand}</p>
        </div>
    )
}