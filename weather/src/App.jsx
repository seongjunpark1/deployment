import useStore from "./store/store";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const { weather, setCity, fetchWeather } = useStore();

  const handleSearch = async () => {
    setCity(input);
    await fetchWeather();
  };

  return (
    <>
      <h2>날씨를 알려드립니다.</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="도시 이름을 영어로 검색해보세요."
        />
        <button onClick={handleSearch}>검색</button>
        {weather && (
          <>
            <h3>{weather.name}</h3>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt=""
          />
          <p>온도 : {weather.main.temp}'</p>
          <p>날씨 : {weather.weather[0].description}</p>
          </>
        )}
    </>
  );
}

export default App;