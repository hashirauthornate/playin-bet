import Image from "next/image";
import React from "react";
import styled from "styled-components";
import avatar from "../public/avatar.png";
import Comment from "./Comment";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import { Row, Stack } from "react-bootstrap";
const CardWrapper = styled.div`
  background-color: rgba(38, 38, 38, 0.7);
  width: 350px;
  & > hr {
    border: 2px solid grey;
    opacity: 0.2;
    z-index: 5;
  }
  border-radius: 20px;
  color: white;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #f4f4f4;
  text-transform: uppercase;
  padding: 25px;
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #f4f4f4;
  padding: 0 25px;
  padding-bottom: 25px;
`;
const UserSection = styled.div`
  padding-top: 10px;
  margin-bottom: 50px;
  padding: 25px;
`;
const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding-top: 10px;
`;
const Text = styled("div")<{ italic?: boolean; green?: boolean }>`
  color: ${(props) =>
    props.green ? props.theme.colors.green : props.theme.colors.fade};
  font-size: 18px;
  font-weight: 800;
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
`;

const Mention = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 800;
  margin-right: 20px;
`;
const PercentageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: 20px;
  width: 300px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  font-weight: 800;
  cursor: pointer;
  color: ${(props) => props.theme.colors.fade};
  &:hover {
    border: 1px solid #cef458;
  }
  margin: 20px 0;
`;
type Props = {
  page: number;
};

const ActivityCard = ({ page }: Props) => {
  return (
    <CardWrapper>
      {page === 1 ? (
        <>
          <Title>ACTIVITY</Title>
          <hr />
          <UserSection>
            <IconsWrapper>
              <Image src={avatar} alt="avatar" />
              <StatsWrapper>
                <Text>12m</Text>
                <Comment comment={16}>
                  <AiOutlineFire size={25} />
                </Comment>
                <Comment comment={16}>
                  <TbMessageCircle size={25} />
                </Comment>
              </StatsWrapper>
            </IconsWrapper>
            <TextWrapper>
              <Mention>@Kinera</Mention>
              <Text italic>is watching the game</Text>
            </TextWrapper>
            <Text>💒 Mary me tommy</Text>
          </UserSection>
          <hr />
          <UserSection>
            <IconsWrapper>
              <Image src={avatar} alt="avatar" />
              <StatsWrapper>
                <Text>12m</Text>
                <Comment comment={16}>
                  <AiOutlineFire size={25} />
                </Comment>
                <Comment comment={16}>
                  <TbMessageCircle size={25} />
                </Comment>
              </StatsWrapper>
            </IconsWrapper>
            <TextWrapper>
              <Mention>@TianaSiphron</Mention>
              <Text italic>is watching the game</Text>
            </TextWrapper>
            <Text>🎲 VEGA$ Baby!!</Text>
            <PercentageWrapper>
              <Text>Las Vegar Raiders Win</Text>
              <Text green>48%</Text>
            </PercentageWrapper>
          </UserSection>
          <hr />
          <UserSection>
            <IconsWrapper>
              <Image src={avatar} alt="avatar" />
              <StatsWrapper>
                <Text>12m</Text>
                <Comment comment={16}>
                  <AiOutlineFire size={25} />
                </Comment>
                <Comment comment={16}>
                  <TbMessageCircle size={25} />
                </Comment>
              </StatsWrapper>
            </IconsWrapper>
            <TextWrapper>
              <Mention>@Mira</Mention>
              <Text italic>bet on Mac Jones</Text>
            </TextWrapper>
            <Text>Yeah... this is not happenin</Text>
            <PercentageWrapper>
              <Text>0 touchdowns</Text>
              <Text green>75%</Text>
            </PercentageWrapper>
          </UserSection>
        </>
      ) : page === 2 ? (
        <>
          <Title>Your Bet</Title>
          <hr />
          <SubTitle>Chose your teams to bet</SubTitle>
        </>
      ) : page === 3 ? (
        <>
          <Title>Your Bet</Title>
          <hr />
          <SubTitle>Minnesota Wild vs Montreal Canadiens</SubTitle>
        </>
      ) : page === 4 ? (
        <>
          <Title>Your Bet</Title>
          <hr />
          <SubTitle>NHL: Minnesota Wild</SubTitle>
        </>
      ) : page === 5 ? (
        <>
          <Title>Your Bet</Title>
          <hr />
          <SubTitle>NHL: Minnesota Wild</SubTitle>
          <UserSection>
            <Text>
              Minnesota Wild will have 4 penalty minutes in the By the end of
              the game.
            </Text>
          </UserSection>
        </>
      ) : (
        <>
          <Title>Your Bet</Title>
          <hr />
          <SubTitle>NHL: Minnesota Wild</SubTitle>
          <UserSection>
            <Text>
              Minnesota Wild will have 4 penalty minutes in the By the end of
              the game.
            </Text>
            <Row>
              <Title>0 touchdowns</Title>
              <Text green>75%</Text>
            </Row>
          </UserSection>
        </>
      )}
    </CardWrapper>
  );
};

export default ActivityCard;
