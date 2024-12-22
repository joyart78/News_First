import Input from "../../components/ExchangeInput/Input.jsx";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../hooks/useApi.js";
import { setResultValue } from "./InputSlice.js";
import { fetchCurr } from "./InputSlice.js";
import arrows from "./img/arrows-exchange.svg";

export default function Converter() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.inputValue);
  const resultValue = useSelector((state) => state.input.resultValue);
  const resultCurrency = useSelector((state) => state.input.resultCurrency);
  const data = useSelector((state) => state.input.data);
  const loading = useSelector((state) => state.input.loading);

  // const { isLoading, data } = useApi(`api.convert`);

  async function getData() {
    // Выполняем запрос и получаем данные напрямую
    const result = await dispatch(fetchCurr()).unwrap(); // Используем unwrap для получения payload
    console.log(result); // Логируем полученные данные

    if (result && result.rates && resultCurrency) {
      dispatch(setResultValue(result.rates[resultCurrency]));
    } else {
      console.error("Не удалось получить данные или currency не указана");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // await dispatch(fetchCurr());
    await getData();
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Input />
        <button>
          <img src={arrows} alt="arrows-exchange" />
        </button>
        <Input isDisabled={true} inputValue={resultValue} isResult={true} />
      </div>
      <div className={styles.convert}>
        <button
          className={styles.convert__btn}
          onClick={(e) => handleSubmit(e)}
        >
          Convert
        </button>
      </div>
    </div>
  );
}
