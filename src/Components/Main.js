import React, { useState } from 'react'
import exchange from '../Images/exchange.svg';


const Main = () => {
    const currencyArray = [
        {
            value: 'pkr',
            id: 'pkr',
            name: 'PKR Pakitani-Rupee'
        },
        {
            value: 'inr',
            id: 'inr',
            name: 'INR Indian-Rupee'
        },
        {
            value: 'usd',
            id: 'usd',
            name: 'USD US-Dollar'
        },
        {
            value: 'aed',
            id: 'aed',
            name: 'AED Emirati-Dirham'
        },
        {
            value: 'eur',
            id: 'eur',
            name: 'EUR European Union'
        },
    ];

    const [amount, setAmount] = useState(1);
    const [input, setInput] = useState(currencyArray[0].value);
    const [result, setResult] = useState(currencyArray[1].value);
    console.log(amount);
    console.log(input);
    console.log(result);
    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
    };
    const handleChangeInput = (event) => {
        setInput(event.target.value);
    };

    const handleChangeResult = (event) => {
        setResult(event.target.value);
    };

    const exchangeValue = () => {
        let changer = input;
        setInput(result);
        setResult(changer);
    };


    let symbol;
    if (input === 'pkr') {
        symbol = 'Rs.'
    } else if (input === 'inr') {
        symbol = '₹.'
    } else if (input === 'usd') {
        symbol = '$.'
    } else if (input === 'aed') {
        symbol = 'د.إ.'
    } else if (input === 'eur') {
        symbol = '€.'
    };


    let resultSymbol;
    if (result === 'pkr') {
        resultSymbol = 'Rs.'
    } else if (result === 'inr') {
        resultSymbol = '₹.'
    } else if (result === 'usd') {
        resultSymbol = '$.'
    } else if (result === 'aed') {
        resultSymbol = 'د.إ.'
    } else if (result === 'eur') {
        resultSymbol = '€.'
    };


    let multiplier;
    if (input === 'pkr') {
        if (result === 'pkr') {
            multiplier = 1
        } else if (result === 'inr') {
            multiplier = 0.29
        } else if (result === 'usd') {
            multiplier = 0.0035
        } else if (result === 'aed') {
            multiplier = 0.013
        } else if (result === 'eur') {
            multiplier = 0.0032
        }
    };

    if (input === 'inr') {
        if (result === 'inr') {
            multiplier = 1
        } else if (result === 'pkr') {
            multiplier = 3.43
        } else if (result === 'usd') {
            multiplier = 0.012
        } else if (result === 'aed') {
            multiplier = 0.044
        } else if (result === 'eur') {
            multiplier = 0.011
        }
    };

    if (input === 'usd') {
        if (result === 'pkr') {
            multiplier = 283.58
        } else if (result === 'inr') {
            multiplier = 82.73
        } else if (result === 'usd') {
            multiplier = 1
        } else if (result === 'aed') {
            multiplier = 3.67
        } else if (result === 'eur') {
            multiplier = 0.91
        }
    };

    if (input === 'aed') {
        if (result === 'pkr') {
            multiplier = 77.21
        } else if (result === 'inr') {
            multiplier = 22.52
        } else if (result === 'usd') {
            multiplier = 0.27
        } else if (result === 'aed') {
            multiplier = 1
        } else if (result === 'eur') {
            multiplier = 0.25
        };
    };

    if (input === 'eur') {
        if (result === 'pkr') {
            multiplier = 312.01
        } else if (result === 'inr') {
            multiplier = 91.04
        } else if (result === 'usd') {
            multiplier = 1.10
        } else if (result === 'aed') {
            multiplier = 4.04
        } else if (result === 'eur') {
            multiplier = 1
        }
    };

    let finalCalculation = amount * multiplier

    const renderedOptions = currencyArray.map((obj) => {
        return <option value={obj.value} key={obj.id}>
            {obj.name}
        </option>
    });

    return (
        <div>
            <div>
                <div>
                    <h4>Amount</h4>
                    <div>
                        <span>{symbol}</span>
                        <input value={amount} placeholder='Enter Amount...' onChange={handleChangeAmount} />
                    </div>
                </div>
                <div>
                    <h4>From</h4>
                    <select name="input" value={input} onChange={handleChangeInput}>
                        {renderedOptions}
                    </select>
                </div>

                <div>
                    <img onClick={exchangeValue} src={exchange} alt="" />
                </div>

                <div>
                    <h4>To</h4>
                    <select name="result" value={result} onChange={handleChangeResult}>
                        {renderedOptions}
                    </select>
                </div>
            </div>
            <p>{resultSymbol} {finalCalculation}</p>
        </div>
    );
};

export default Main;

