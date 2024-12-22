import styles from "./style.module.css";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside.js";
import {
  setInputValue,
  setCurrency,
  setResultCurrency,
} from "../../pages/Exchange/InputSlice.js";
import { useDispatch, useSelector } from "react-redux";

import usdIcon from "./image/usd.svg";
import eurIcon from "./image/EUR.svg";
import gbpIcon from "./image/Pound.svg";
import cadIcon from "./image/CAD.svg";
import dropdownIcon from "./image/down-line.svg";

const icons = {
  USD: usdIcon,
  EUR: eurIcon,
  GBP: gbpIcon,
  CAD: cadIcon,
};

export default function Input({
  isDisabled = false,
  inputValue,
  isResult = false,
}) {
  const allCurrency = [
    { label: "USD", icon: "usd.svg" },
    { label: "EUR", icon: "EUR.svg" },
    { label: "GBP", icon: "Pound.svg" },
    { label: "CAD", icon: "CAD.svg" },
  ];

  const currency = isResult
    ? localStorage.getItem("currencyResult")
    : localStorage.getItem("currency");

  const [activeCurrency, setActiveCurrency] = useState(
    currency
      ? allCurrency.find((curr) => curr.label === currency)
      : {
          label: "USD",
          icon: "usd.svg",
        },
  );

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(inputValue);

  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className={styles.input_form}>
      <input
        type="number"
        value={inputValue}
        className={styles.input__input}
        disabled={isDisabled}
        onChange={(e) => {
          setInput(Number(e.target.value));
          dispatch(setInputValue(Number(e.target.value)));
        }}
        placeholder="0"
      />
      <div className={styles.divider}></div>
      <div className={styles.input__select}>
        <button
          className={styles.input__btn}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <img
            src={icons[activeCurrency.label]}
            alt={activeCurrency.label}
            className={styles.btn_img}
          />
          {activeCurrency.label}
          <img src={dropdownIcon} alt="dropdown" className={styles.btn_img} />
        </button>
        {isOpen && (
          <ul ref={dropdownRef} className={styles.select__form}>
            {allCurrency.map((currency) => (
              <li
                key={currency.label}
                className={styles.select__options}
                onClick={() => {
                  setActiveCurrency({
                    label: currency.label,
                    icon: currency.icon,
                  });
                  setIsOpen(false);
                  if (isResult) {
                    localStorage.setItem("currencyResult", currency.label);
                    dispatch(setResultCurrency(currency.label));
                  } else {
                    localStorage.setItem("currency", currency.label);
                    dispatch(setCurrency(currency.label));
                  }
                }}
              >
                <img
                  src={icons[currency.label]}
                  alt={currency.label}
                  className={styles.btn_img}
                />
                {currency.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
