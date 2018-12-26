import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../assets/style/postsList.css";

import { PositionContext } from "../contexts";

export default function PostsList() {
  const { setStart } = useContext(PositionContext);
  const click = e => {
    setStart("head", {
      width: e.target.offsetWidth,
      height: e.target.offsetHeight,
      x: e.target.offsetLeft - window.pageXOffset,
      y: e.target.offsetTop - window.pageYOffset
    });
    setStart("title", {
      fontSize: 18,
      padding: "16px"
    });
    setStart("belt", {
      height: 40,
      fontSize: 16,
      padding: "0 16px"
    });
  };

  return (
    <>
      <h1>List</h1>
      <ul>
        {new Array(20).fill(1).map((x, i) => (
          <Item key={i} click={click} />
        ))}
      </ul>
    </>
  );
}

function Item({ click }) {
  return (
    <ItemWrapper>
      <Link to="/foo" onClick={click}>
        <div className="main">
          <h2>
            人気ゲームタイトルの
            <br />
            期間限定イベント
          </h2>
        </div>
        <div className="belt">メリークリスマス！</div>
      </Link>
    </ItemWrapper>
  );
}
const ItemWrapper = styled.li`
  width: 30%;
  margin: 0 1.5% 60px;

  a {
    text-decoration: none;
  }

  .main {
    background: no-repeat center / cover
      url(${require("../assets/images/img.jpg")});
    height: 200px;
    width: 100%;

    h2 {
      padding: 16px;
      margin: 0;
      font-size: 18px;
      color: #fff;
      text-decoration: none;
    }
  }

  .belt {
    background-color: tomato;
    color: #fff;
    height: 40px;
    font-size: 16px;
    padding: 0 16px;
  }
`;
