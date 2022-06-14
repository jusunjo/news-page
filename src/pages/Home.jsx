import axios from "axios";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import HomeDiv from "../styles/HomeStyle";
import NewsItem from "../components/NewsItem";
import { token } from "../token/apiToken";

const Home = () => {
    // let counter = 1;
    // const { ref, inView } = useInView();

    const [searchWord, setSearchWord] = useState("");

    const [arr, setArr] = useState([]);

    //값을 입력한다.
    //0.5초동안 타이핑이 없으면 api요청을 해서 newsList를 받아온다.

    useEffect(() => {
        const hi = setTimeout(() => {}, 500);
        return () => {
            FuncGetNews(searchWord);
            clearTimeout(hi);
        };
    }, [searchWord]);

    const FuncGetNews = async (word) => {
        const response = await axios
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&fl=web_url,pub_date[…]e,snippet,headline,_id&api-key=${token}`)
            .then((res) => res.data.response.docs);
        return setArr(response);
    };

    return (
        <HomeDiv>
            <input onChange={(e) => setSearchWord(e.target.value)} className="input-box" />

            {arr.map((news) => (
                <NewsItem key={news._id} news={news} />
            ))}
        </HomeDiv>
    );
};

export default Home;
