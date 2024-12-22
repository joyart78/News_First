import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCurr } from "../../pages/Exchange/InputSlice.js";
import CurrencyLoader from "./CurrencyLoader.jsx";

export default function CurrencyWidget(props) {
  const [value, setValue] = useState(0);
  const resultCurrency = useSelector((state) => state.input.resultCurrency);
  const inputCurrency = useSelector((state) => state.input.inputCurrency);
  const loadingCurr = useSelector((state) => state.input.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await dispatch(fetchCurr()).unwrap();
        setValue(result.rates[resultCurrency]);
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
    }
    fetchData();
  }, [dispatch, resultCurrency, inputCurrency]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      1 {inputCurrency} ={" "}
      {loadingCurr === "loading" ||
      loadingCurr === "idle" ||
      loadingCurr === "failed" ? (
        <CurrencyLoader />
      ) : (
        value
      )}{" "}
      {resultCurrency}
    </div>
  );
}
