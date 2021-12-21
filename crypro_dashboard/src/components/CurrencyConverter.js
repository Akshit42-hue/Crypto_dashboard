import React from "react";
import ExchangeRate from "./ExchangeRateDisplay";
import { useState} from "react";
import axios from "axios";

const CurrencyConverter = () => {

    const currencies = ['BTC','ETH','USD','LTC','ADA'];
    const [ChosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [ChosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC');
    const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('BTC');

    const [result, setResult] = useState(0);
   

    const convert = () => {
        var options = {
            method: 'GET',
            url: 'http://localhost:8000/convert',
            params: {from_currency: ChosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: ChosenSecondaryCurrency},
            
          };
          
          axios.request(options).then((response) => {
              console.log(response.data);
              setExchangeRate(response.data);
              setResult(response.data * amount);
              setPrimaryCurrencyExchanged(ChosenPrimaryCurrency);
              setSecondaryCurrencyExchanged(ChosenSecondaryCurrency);
            }).catch((error) => {
              console.error(error);
          });
    }
    console.log(exchangeRate);
    return (
      <div className="currency-converter">
       
       <h2>Currency Converter</h2>
       <div className="input-box">
        <table>
            <body>
                <tr>
                    <td>Primary Currency:</td>
                    <td><input type = "text" name="currency-amount" value={amount} onChange={(e) => setAmount(e.target.value)} /></td>
                    <td>
                        <select
                            value={ChosenPrimaryCurrency}
                            name='currency-option-1'
                            className = 'currency-options'
                            onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >

                            {currencies.map((currency, _index )=> (<option key={_index}>{currency}</option>))}
                        </select>
                    </td>
                
                </tr>

                <tr>
                    <td>Secondary Currency:</td>
                    <td><input type = "text" name="currency-amount-2" value={result} disabled = {true} /></td>
                    <td>
                        <select
                            value={ChosenSecondaryCurrency}
                            name='currency-option-2'
                            className = 'currency-options'
                            onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >

                            {currencies.map((currency, _index )=> (<option key={_index}>{currency}</option>))}
                        </select>
                    </td>
                
                </tr>

            </body>
            
        </table>
       <button id='convert-button' onClick={convert}>Convert</button>
        </div>
        <ExchangeRate 
                exchangeRate = {exchangeRate}
                ChosenPrimaryCurrency={primaryCurrencyExchanged}
                ChosenSecondaryCurrency={secondaryCurrencyExchanged}
        />
      </div>
    );
  };
  
  export default CurrencyConverter;