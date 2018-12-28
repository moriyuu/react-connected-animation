import React, { useContext, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { PositionContext } from "../contexts";

export default function PostsShow(props) {
  const { getStart } = useContext(PositionContext);

  useEffect(() => scrollTo(0, 0));

  return (
    <>
      <Head
        headStartStyle={getStart("head")}
        titleStartStyle={getStart("title")}
        beltStartStyle={getStart("belt")}
      >
        <div className="main">
          <h1>
            人気ゲームタイトルの
            <br />
            期間限定イベント
          </h1>
        </div>
        <div className="belt">ハッピーニューイヤー！</div>
      </Head>
      <Content
        contentStartStyle={{ opacity: 0, maxHeight: 0, margin: "40px 0 0 0" }}
      >
        営みの街が暮れたら　色めき
        <br />
        風たちは運ぶわ　カラスと人々の群れ
        <br />
        <br />
        意味なんかないさ　暮らしがあるだけ
        <br />
        ただ腹を空かせて　君のもとへ帰るんだ
        <br />
        <br />
        物心ついたらずっと見上げて思うことが
        <br />
        この世にいる誰も　２人から
        <br />
        <br />
        胸の中にあるもの　いつか見えなくなるもの
        <br />
        それはそばにいること　いつも思い出して
        <br />
        君の中にあるもの　距離の中にあることを
        <br />
        恋をしたの　あなたの　指の交ざり　頬の香り　 夫婦を越えてゆけ
        <br />
        <br />
        醜いと秘めた思いは　色づき
        <br />
        白鳥は運ぶわ　当たり前を変えながら
        <br />
        <br />
        恋せずにいられないな　似た顔も　虚構にも
        <br />
        愛が生まれるのは　１人から
        <br />
        <br />
        胸の中にあるもの　いつか見えなくなるもの
        <br />
        それはそばにいること　いつも思い出して
        <br />
        君の中にあるもの　距離の中にあることを
        <br />
        恋をしたの　あなたの　指の交ざり　頬の香り　 夫婦を越えてゆけ
        <br />
        <br />
        泣き顔も　黙る夜も　揺れる笑顔も　いつまでも　いつまでも
        <br />
        <br />
        胸の中にあるもの　いつか見えなくなるもの
        <br />
        それはそばにいること　いつも思い出して
        <br />
        君の中にあるもの　距離の中にあることを
        <br />
        恋をしたの　あなたの　指の交ざり　頬の香り
        <br />
        <br />
        夫婦を越えてゆけ
        <br />
        ２人を越えてゆけ　
        <br />
        １人を越えてゆけ
        <br />
        <br />
        営みの街が暮れたら　色めき
        <br />
        風たちは運ぶわ　カラスと人々の群れ
        <br />
        <br />
        意味なんかないさ　暮らしがあるだけ
        <br />
        ただ腹を空かせて　君のもとへ帰るんだ
        <br />
        <br />
        物心ついたらずっと見上げて思うことが
        <br />
        この世にいる誰も　２人から
        <br />
        <br />
        胸の中にあるもの　いつか見えなくなるもの
        <br />
        それはそばにいること　いつも思い出して
        <br />
        君の中にあるもの　距離の中にあることを
        <br />
        恋をしたの　あなたの　指の交ざり　頬の香り　 夫婦を越えてゆけ
        <br />
        <br />
        醜いと秘めた思いは　色づき
        <br />
        白鳥は運ぶわ　当たり前を変えながら
        <br />
        <br />
        恋せずにいられないな　似た顔も　虚構にも
        <br />
        愛が生まれるのは　１人から
        <br />
        <br />
        胸の中にあるもの　いつか見えなくなるもの
        <br />
        それはそばにいること　いつも思い出して
        <br />
        君の中にあるもの　距離の中にあることを
        <br />
        恋をしたの　あなたの　指の交ざり　頬の香り　 夫婦を越えてゆけ
        <br />
        <br />
        泣き顔も　黙る夜も　揺れる笑顔も　いつまでも　いつまでも
        <br />
        <br />
        胸の中にあるもの　いつか見えなくなるもの
        <br />
        それはそばにいること　いつも思い出して
        <br />
        君の中にあるもの　距離の中にあることを
        <br />
        恋をしたの　あなたの　指の交ざり　頬の香り
        <br />
        <br />
        夫婦を越えてゆけ
        <br />
        ２人を越えてゆけ　
        <br />
        １人を越えてゆけ
      </Content>
    </>
  );
}

const Head = styled.div`
  position: absolute;
  background: center / cover url(${require("../assets/images/img.jpg")});
  width: 100%;
  height: 400px;
  left: 0;
  top: 0;
  ${p => animation(p.headStartStyle)};

  .main {
    height: 100%;

    h1 {
      color: #fff;
      font-size: 40px;
      padding: 20px;
      margin: 0;
      ${p => animation(p.titleStartStyle)};
    }
  }

  .belt {
    background-color: tomato;
    color: #fff;
    height: 80px;
    font-size: 20px;
    padding: 16px 40px;
    ${p => animation(p.beltStartStyle)};
  }
`;
const Content = styled.div`
  padding: calc(512px + 24px) 120px 40px;
  overflow: hidden;
  max-height: 9999px;
  color: #888;
  ${p => animation(p.contentStartStyle)};
`;

const animation = (startStyle: any) => css`
  animation: ${mykeyframe(startStyle)} 0.3s cubic-bezier(0.49, 1.26, 0.99, 0.99);
`;
const mykeyframe = (startStyle: any) => keyframes({ "0%": { ...startStyle } });
