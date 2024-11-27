import React, { useState } from 'react'
import './SiCalculator.css'
function SiCalculator() {

    const [num1 , setNum1] = useState(0);
    const [num2 , setNum2] = useState(0);
    const [num3 , setNum3] = useState(0);
    const [add , setAdd] = useState(0);

    const calSum = (e) => {
        e.preventDefault();
        
        if(num1 === 0 || num2 === 0 || num3 === 0)
        {
            alert("Please enter the Values");
        }

        else{
            let add = parseInt(num1) * parseInt(num2) * parseInt(num3) / 100;
            setAdd(parseInt(add)); 
        }
    }

    const handleClick = (e) => {
        setAdd(0);
        window.location.reload();
    }

    return (
        <div className='main_container'>
            <div className='content'>
                <div className='head_part_one'>
                    <h1>Simple Calculator</h1>
                    <p>Calculate your simple interest easily</p>
                </div>

                <div className='card_amount'>
                    <h3>₹ {add}</h3>
                    <br />
                    <p>Total Simple Interest</p>
                </div>

                <form onSubmit={calSum}>
                    <div className='input_area'>
                        <input type="number" placeholder='₹ Principal Amount' value={num1 || ""} onChange={(e) => setNum1(e.target.value)} />
                        <input type="number" placeholder='Rate of Interset (p.a)%' value={num2 || ""} onChange={(e) => setNum2(e.target.value)} />
                        <input type="number" placeholder='Time Period (Yr)' value={num3 || ""} onChange={(e) => setNum3(e.target.value)}/>
                    </div>
                    
                    <div className='btn-list'>
                        <button>Calculate</button>
                        <button onClick={handleClick}>Reset</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SiCalculator
