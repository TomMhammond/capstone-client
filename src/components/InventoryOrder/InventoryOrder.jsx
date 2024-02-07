import '../../pages/InventoryReportPage/InventoryReportPage.scss';

export default function InventoryOrder( inventory ){

    const singleInventory = inventory.inventory;
    const orderAmount = singleInventory.expected_amount - singleInventory.counted;

    return(
        <div>
            <div className='inventory-report-card__wrapper'>
                <p className='inventory-report-card__product'>{`Item Name: ${singleInventory.item}`}</p>
                <p className='inventory-report-card__quantity'>{`Quantity to Order: ${orderAmount} `}</p>
            </div>  
        </div>
    )
}