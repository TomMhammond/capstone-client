import axios from 'axios';
import './AuditInventoryForm.scss';

export default function AuditInventory({ inventory }){
    const submitHandler = (e) => {
        e.preventDefault();
        const formEl = e.target;
        const count = Number(formEl.count.value);

        const body = 
        {
            counted: count
        }

        axios.put(`${process.env.REACT_APP_BASE_URL}/inventory/${inventory.id}`, body)
    }

    return(
        <form className='inventory-form' onSubmit={submitHandler}>
            <p className='inventory-form__item'>{inventory.item}</p>
            <p className='inventory-form__cat'>{inventory.category}</p>
            <p className='inventory-form__onHand'>{`On Hand: ${inventory.amount_on_hand}`}</p>
            <p className='inventory-form__expected'>{`Threshold: ${inventory.expected_amount}`}</p>
            <label className='inventory-form__label' htmlFor='count'>Counted:</label>
            <input className='inventory-form__input' type='text' name='count' id='count' placeholder='0'></input>
            <button className='inventory-form__button'>Set</button>
        </form>
    )
}