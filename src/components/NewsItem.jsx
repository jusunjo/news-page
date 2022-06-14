import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clipNews } from "../reducers/useSlice";
import NewsItemDiv from "../styles/NewsItemStyle";

const NewsItem = ({ news }) => {
    const [toggle, setToggle] = useState(true);
    const dispatch = useDispatch();

    //clip 누른 item을 redux clipList로 넣기
    const FuncOnClick = () => {
        dispatch(clipNews(news));
        setToggle(!toggle);
    };

    return (
        <NewsItemDiv>
            <h3>{news.headline.main}</h3>
            <div>{news.web_url}</div>
            {toggle ? <button onClick={FuncOnClick}>clip</button> : <div>저장완료</div>}

            <button onClick={() => window.open(news.web_url)}>자세히 보기</button>
        </NewsItemDiv>
    );
};

export default NewsItem;
