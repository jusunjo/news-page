import styled from "styled-components";

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .input-box {
        margin-top: 60px;
        display: flex;
        margin: 60px auto 5px;
        width: 50%;
    }

    button {
        margin-bottom: 20px;
    }

    .news {
        border: 1px solid black;
        width: 50%;
        margin-bottom: 40px;
    }
`;

export default HomeDiv;
