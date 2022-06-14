import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeClipNews } from "../reducers/useSlice";
import ClipDiv from "../styles/ClipPageStyle";

import NewsItemDiv from "../styles/NewsItemStyle";

function Clip() {
    const news = useSelector((it) => it.useSlice.clipList);

    const dispatch = useDispatch();

    return (
        <ClipDiv>
            {news.map((news) => (
                <NewsItemDiv key={news.id}>
                    <h3>{news.text.headline.main}</h3>
                    <div>{news.text.web_url}</div>
                    <button
                        onClick={() => {
                            dispatch(removeClipNews(news.id));
                        }}
                    >
                        unClip
                    </button>

                    <button onClick={() => window.open(news.text.web_url)}>자세히 보기</button>
                </NewsItemDiv>
            ))}
        </ClipDiv>
    );
}

export default Clip;
