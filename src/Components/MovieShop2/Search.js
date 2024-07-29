import styled from "styled-components";
import { useEffect, useState } from "react";
import { getGenre, IMG_PATH, searchMoviesByKeyword } from "./api";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBox = styled.div``;
const Input = styled.input`
  width: 500px;
  margin-right: 5px;
`;
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  color: #333;
  margin: 2px 0;
`;

export function Search() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  useEffect(() => {
    if (keyword) {
      searchMovies();
    } else {
      setData(null);
    }
  }, [keyword]);

  async function searchMovies() {
    try {
      const response = await searchMoviesByKeyword(keyword);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <SearchBox>
        <Input
          placeholder="검색어를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            navigate(`/search?keyword=${inputValue}`);
            setInputValue("");
          }}
        >
          Search
        </button>
      </SearchBox>
      <h3>{keyword ? `${keyword}로 입력한 결과` : null}</h3>
      <Container>
        {data &&
          data.results.map((movie) => (
            <Card
              key={movie.id}
              onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}
            >
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>
                <b>타이틀</b> : {movie.title}
              </Text>
              <Text>
                <b>장르</b> : {getGenre(movie.genre_ids)}
              </Text>
              <hr />
              <Text>{movie.overview}</Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
