import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3])

    // Spread operator is to prevent the addition rendering over the initial array, we are copying the previous return.
    const addNums = () => {
        setNums([...nums, nums.length + 1])
    }

    // Filter leaves out items that return false. We're making it return a false value here, so it removes it.
    const removeNums = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }

  return (
    
    <div>
        <button onClick={addNums}>Add Item</button>
        <button onClick={removeNums}>Remove Item</button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays