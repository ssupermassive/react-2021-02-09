import React, { useContext } from 'react';
import { currencyContext } from '../../contexts/сurrency-context';

const CurrencySelector = () => {
  const { сurrencies, current, setCurrent } = useContext(currencyContext);

  const onChangeHandler = (e) => {
    const current = сurrencies.find(
      (сurrency) => сurrency.id === Number(e.target.value)
    );
    setCurrent(current);
  };

  return (
    <select defaultValue={current} size="1" onChange={onChangeHandler}>
      {сurrencies.map((currency) => (
        <option key={currency.id} value={currency.id}>
          {currency.title}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
