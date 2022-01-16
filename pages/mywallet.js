import Layout from "../component/Layout";
import Typography from "../component/Typography";
import NFT from "../component/NFT";
import React, { Component, useEffect } from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import Margin from "../component/Margin";
import Carousel from "nuka-carousel";

const BoldTypography = styled(Typography)`
  font-weight: bold;
`;

const Header = styled.div`
  width: 300px;
  text-align: left;
`;

const NTFborder = styled.div`
  flex-direction: column;
  justify-content: center;
  //box-shadow: -10px 20px 20px #000; // 그림자 이상해서 일단 주석 처리 ㅜㅜ
`;

const Menu = {
  alignItems: "left",
};

export default function Wallet() {
  const array = [
    { name: "인천 444", blood: "카리나의 피", number: "011111-23-44" },
    { name: "인천 멋사 혈액원2222", blood: "전혈 1000ml", number: "01-23-442" },
    { name: "인천 444", blood: "카리나의 피", number: "011111-23-44" },
    { name: "인천 멋사 혈액원2222", blood: "전혈 1000ml", number: "01-23-442" },
  ];
  return (
    <Layout>
      <Header>
        <Margin size="30" />
        <BoldTypography size="24">나의 헌혈지갑</BoldTypography>
        <Margin size="10" />
        <div style={Menu}>
          <Typography>NFT</Typography>
          <Typography>시간순</Typography>
        </div>
      </Header>
      <Margin size="40" />

      <Carousel
        height="390px"
        width="250px"
        slidesToShow={1} // 한 번에 보여줄 슬라이드의 개수
        cellAlign="center"
        renderCenterLeftControls={({ previousSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => null}
        renderBottomCenterControls={() => null}
      >
        {_.map(array, (array) => (
          <NTFborder>
            <NFT data={array} />
          </NTFborder>
        ))}
      </Carousel>
    </Layout>
  );
}

/*
useEffect로 axios로 받아서
get으로 받음
2번
로그인했는지받고
데이터받고->useState
*/
