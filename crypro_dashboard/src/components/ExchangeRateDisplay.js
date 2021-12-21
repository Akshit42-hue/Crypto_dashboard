const ExchangeRate = ({exchangeRate, ChosenPrimaryCurrency, ChosenSecondaryCurrency}) => {
    return (
      <div className="exchange-rate">
        <h3>ExchangeRate:-</h3>
        <h1>{exchangeRate}</h1>
        <p>{ChosenPrimaryCurrency} to {ChosenSecondaryCurrency}</p>
      </div>
    );
  }
  
  export default ExchangeRate;