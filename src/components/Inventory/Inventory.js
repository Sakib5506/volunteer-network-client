import React from 'react'
import fakeData from '../FakeData/FakeData'

const Inventory = () => {
    const allTask = fakeData;
    const handleAddProduct = () => {
        fetch('http://localhost:5000/addAllTask', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(allTask)
        })
    }
    console.log(allTask);
    return (
        <div>
            <h1>Inventory</h1>
            <button onClick={handleAddProduct} className="bg-indigo-600">Add All Product</button>
        </div>
    )
}

export default Inventory