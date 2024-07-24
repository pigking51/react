import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(-65deg, teal, #feb47b);
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
`;
const Icon = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-top: 20px;
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;
const Temp = styled.div`
  margin-top: 20px;
  font-size: 5rem;
  i {
    font-size: 3.5rem;
  }
`;
const City = styled.div`
  font-size: 2.5rem;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`;

export function OpenWeather() {
  const API_KEY = "8890a3b18e47d8c9e68beba52ac232d4";
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  //   useEffect(() => {
  //     setIcon("04d");
  //     setTemp(28);
  //     setCity("Daejeon");
  //     setWeather("Clouds");
  //   }, []); // 최초 1회만

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoOk, geoError);
  }, []); // 최초 1회만

  async function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const cityName = "seoul";
    const urlCity = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_KEY}&units=metric`;
    // 1. Axios 사용법(Async~await)
    try {
      const response = await axios.get(urlCity);
      const data = response.data;
      console.log(data);
      setCity(data.name);
      setTemp(parseInt(data.main.temp));
      setIcon(data.weather[0].icon);
      setWeather(data.weather[0].main);
    } catch (error) {
      console.log("Async-awiat에 따른 오류");
    }
    // 장점: callback 없음

    // 2. Axios 사용법(promise-then)
    // axios
    //   .get(url)
    //   .then((response) => {
    //     const data = response.data;
    //     console.log(data);
    //     setCity(data.name);

    //     setTemp(parseInt(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //     setWeather(data.weather[0].main);
    //   })
    //   .catch((error) => {
    //     console.log("axios로 연결한건데 오류뜸");
    //   });

    // axios 장점
    // 1. 에러에 대한 정보가 많음
    // 2. 오래된 사이트도 가능

    // 3. fetch 사용법
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCity(data.name);
    //     // setTemp(Math.round(parseInt(data.main.temp)/10));
    //     setTemp(parseInt(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //     setWeather(data.weather[0].main);
    //   })
    //   .catch((error) => {
    //     console.log("요청이 실패했습니다", error);
    //   });
  }

  function geoError() {
    alert("현재 위치정보를 찾을 수 없습니다.");
  }

  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
      </Container>
    </>
  );
}
