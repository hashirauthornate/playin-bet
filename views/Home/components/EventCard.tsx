import Image from "next/image";
import React, { useState } from "react";
import { Row, Stack } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Comment from "../../../components/Comment";
import CreateBet from "../../../components/CreateBet";
import match1 from "../../../public/match1.png";
import match2 from "../../../public/match2.png";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import { FaPlus, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Btn from "../../../components/Btn";
import line from "../../../public/line.png";
import frame from "../../../public/frame.png";
const CardWrapper = styled.div`
  background-color: rgba(38, 38, 38, 0.7);
  width: 870px;
 
  & > hr {
    border: 2px solid grey;
    opacity: 0.2;
  }
  border-radius: 20px;
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px;
`;
const Container = styled.div`
  padding: 25px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #f4f4f4;
`;
const NavlinkWrapper = styled.div`
  display: flex;
`;
const Navlink = styled.div`
  margin: 10px;
  color: ${(props) => props.theme.colors.fade};
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  &:hover {
    color: white;
  }
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;
const Policy = styled.div`
  color: ${(props) => props.theme.colors.green};
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
`;
const TitleWrapper = styled.div`
  padding: 25px;
  & > hr {
    border: 1px solid
      linear-gradient(
        90deg,
        rgba(128, 128, 128, 0.804359243697479) 0%,
        rgba(128, 128, 128, 0) 89%
      );
  }
`;
const MatchTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
`;
const MatchSubTitle = styled.div`
  color: ${(props) => props.theme.colors.fade};
  font: 20px;
  font-weight: 700;
`;
const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;
type Size = {
  size: string;
};
const Dot = styled.div`
  height: ${(props: Size) => props.size};
  width: ${(props: Size) => props.size};
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const NumberWrapper = styled.div`
  height: 40px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  margin: 10px;
  &:hover {
    border: 1px solid #cef458;
  }
`;
type Colors = {
  InputColor: string;
};
const Line = styled.div`
  border-left: 1px solid;
  height: 30px;
  margin: 0 20px;
  opacity: 0.6;
  margin-right: 10px;
  border-color: ${(props: Colors) => props.InputColor};
`;
const CenterTitle = styled.div`
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: 700;
`;
type NameProps = {
  size: string;
  weight: number;
  style: string;
};
const Name = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 800;
  color: white;
`;
const Tag = styled.span`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  color: white;
  font-style: italic;
`;
type Props = {
  setPage: any;
  page: number;
};

const EventCard = ({ setPage, page }: Props) => {
  return (
    <CardWrapper>
      {page === 1 ? (
        <>
          <Navbar>
            <Title>EVENTS</Title>
            <NavlinkWrapper>
              <Navlink>Featured</Navlink>
              <Navlink>Your Bets</Navlink>
              <Navlink>Custom bets</Navlink>
            </NavlinkWrapper>
          </Navbar>
          <hr />
          <FlexWrapper>
            <CreateBet title="Bet type: Game winner">
              <IoIosArrowDown color="cef458" size={20} />
            </CreateBet>
            <CreateBet title="Create bet" setPage={setPage} page={page}>
              <FaPlus color="cef458" />
            </CreateBet>
          </FlexWrapper>
          <Column>
            <Image src={match1} alt="banner" width={790} />
          </Column>
          <TitleWrapper>
            <MatchTitle>Minnesota wild vs Montreal Canadiens</MatchTitle>
            <MatchSubTitle>Game starts in 03:34:12</MatchSubTitle>
            <br />
            <IconButtonWrapper>
              <IconWrapper>
                <Comment comment={5}>
                  <AiOutlineFire size={30} />
                </Comment>
                <Comment comment={5}>
                  <TbMessageCircle size={30} />
                </Comment>
              </IconWrapper>
              <Btn title="Join Room" />
            </IconButtonWrapper>
            <hr />
          </TitleWrapper>
          <Column>
            <Image src={match2} alt="banner" width={790} />
          </Column>
          <TitleWrapper>
            <MatchTitle>Phoenix Sns vs Montreal Canadiens</MatchTitle>
            <MatchSubTitle>Match starts in 03:34:12</MatchSubTitle>
            <br />
            <IconButtonWrapper>
              <IconWrapper>
                <Comment comment={21}>
                  <AiOutlineFire size={30} />
                </Comment>
                <Comment comment={19}>
                  <TbMessageCircle size={30} />
                </Comment>
              </IconWrapper>
              <Btn title="Join Room" />
            </IconButtonWrapper>
            <hr />
          </TitleWrapper>
        </>
      ) : page == 2 ? (
        <>
          <Navbar>
            <Stack direction="horizontal" gap={3}>
              <Dot size="40px">
                <RiArrowLeftSLine color="white" size={35} />
              </Dot>
              <Title>Pick the Player/Team</Title>
            </Stack>
          </Navbar>
          <hr />
          <Container>
            <FlexWrapper>
              <CreateBet title="Search Matchups">
                <FaSearch color="cef458" />
              </CreateBet>
              <CreateBet title="Featured">
                <IoIosArrowDown color="cef458" size={20} />
              </CreateBet>
            </FlexWrapper>
            <Stack gap={5}>
              <Stack gap={4}>
                <Image src={line} alt="line" />
                <Row>
                  <Col lg={10}>
                    <Stack gap={4}>
                      <Stack direction="horizontal" gap={2}>
                        <Line InputColor="blue" />
                        <Name>MINNESOTA</Name>
                        <Tag>WILD</Tag>
                      </Stack>
                      <Stack direction="horizontal" gap={2}>
                        <Line InputColor="green" />
                        <Name>MONTREAL </Name>
                        <Tag>CANADIENS</Tag>
                      </Stack>
                    </Stack>
                  </Col>
                  <Col>
                    <Dot size="60px">
                      <RiArrowRightSLine
                        color="#CEF458"
                        size={45}
                        onClick={() => setPage(page + 1)}
                      />
                    </Dot>
                  </Col>
                </Row>
              </Stack>
              <Stack gap={4}>
                <Image src={line} alt="line" />
                <Row>
                  <Col lg={10}>
                    <Stack gap={4}>
                      <Stack direction="horizontal" gap={2}>
                        <Line InputColor="blue" />
                        <Name>PITTSBURGH</Name>
                        <Tag>STEELERS</Tag>
                      </Stack>
                      <Stack direction="horizontal" gap={2}>
                        <Line InputColor="green" />
                        <Name>CLEVELAND </Name>
                        <Tag>BROWNS</Tag>
                      </Stack>
                    </Stack>
                  </Col>
                  <Col>
                    <Dot size="60px">
                      <RiArrowRightSLine color="#CEF458" size={45} />
                    </Dot>
                  </Col>
                </Row>
              </Stack>
              <Stack gap={4}>
                <Image src={line} alt="line" />
                <Row>
                  <Col lg={10}>
                    <Stack gap={4}>
                      <Stack direction="horizontal" gap={2}>
                        <Line InputColor="blue" />
                        <Name>LAS VEGAS</Name>
                        <Tag>RAIDERS</Tag>
                      </Stack>
                      <Stack direction="horizontal" gap={2}>
                        <Line InputColor="green" />
                        <Name>KANSAS CITY </Name>
                        <Tag>CHIEFS</Tag>
                      </Stack>
                    </Stack>
                  </Col>
                  <Col>
                    <Dot size="60px">
                      <RiArrowRightSLine color="#CEF458" size={45} />
                    </Dot>
                  </Col>
                </Row>
              </Stack>
              <Image src={line} alt="line" />
            </Stack>
          </Container>
        </>
      ) : page == 3 ? (
        <>
          <Navbar>
            <Stack direction="horizontal" gap={3}>
              <Dot size="40px">
                <RiArrowLeftSLine color="white" size={35} />
              </Dot>
              <Title>Pick the Player/Team</Title>
            </Stack>
          </Navbar>
          <hr />
          <Container>
            <FlexWrapper>
              <CreateBet title="Search Matchups">
                <FaSearch color="cef458" />
              </CreateBet>
              <CreateBet title="Featured">
                <IoIosArrowDown color="cef458" size={20} />
              </CreateBet>
            </FlexWrapper>
            <Image src={line} alt="line" />
            <br />
            <br />
            <Stack gap={5}>
              <Flex>
                <Name>MINNESOTA WILD</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>MONTREAL CANADIENS</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>KIRBY DACH</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>JAKE ALLEN</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>BRENDAN GALLAGHER</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
            </Stack>
            <Image src={line} alt="line" />
          </Container>
        </>
      ) : page == 4 ? (
        <>
          <Navbar>
            <Stack direction="horizontal" gap={3}>
              <Dot size="40px">
                <RiArrowLeftSLine color="white" size={35} />
              </Dot>
              <Title>Pick the Player/Team</Title>
            </Stack>
          </Navbar>
          <hr />
          <Row>
            <Col>
              <NumberWrapper>0</NumberWrapper>
            </Col>
            <Col>
              <NumberWrapper>1</NumberWrapper>
            </Col>
            <Col>
              <NumberWrapper>2</NumberWrapper>
            </Col>
            <Col>
              <NumberWrapper>3</NumberWrapper>
            </Col>
            <Col>
              <NumberWrapper>5+</NumberWrapper>
            </Col>
          </Row>
          <Container>
            <Image src={line} alt="line" />
            <br />
            <br />
            <Stack gap={5}>
              <Flex>
                <Name>MINNESOTA WILD</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>MONTREAL CANADIENS</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>KIRBY DACH</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>JAKE ALLEN</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>BRENDAN GALLAGHER</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
            </Stack>
            <Image src={line} alt="line" />
          </Container>
        </>
      ) : page === 5 ? (
        <>
          <Navbar>
            <Stack direction="horizontal" gap={3}>
              <Dot size="40px">
                <RiArrowLeftSLine color="white" size={35} />
              </Dot>
              <Title>Pick the Player/Team</Title>
            </Stack>
          </Navbar>
          <Container>
            <Image src={line} alt="line" />
            <br />
            <br />
            <Stack gap={5}>
              <Flex>
                <Name>BY THE END OF THE GAME</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>IN THE 3RD PERIOD</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>IN THE 2ND PERIOD</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
              <Flex>
                <Name>IN THE 1ST PERIOD</Name>
                <Dot size="60px">
                  <RiArrowRightSLine
                    color="#CEF458"
                    size={45}
                    onClick={() => setPage(page + 1)}
                  />
                </Dot>
              </Flex>
            </Stack>
            <Image src={line} alt="line" />
          </Container>
        </>
      ) : (
        <>
          <Navbar>
            <Stack direction="horizontal" gap={3}>
              <Dot size="40px">
                <RiArrowLeftSLine color="white" size={35} />
              </Dot>
              <Title>Pick the Player/Team</Title>
            </Stack>
          </Navbar>
          <hr />
          <Container>
            <CenterTitle>Your bet is set</CenterTitle>
            <Center>
              <Image src={frame} alt="square" />s
            </Center>
            <CenterTitle>
              Add your wager and sumbit your bet for
              <br /> others to take
            </CenterTitle>
            <Policy>
              Money will only be taken out of your <br /> account if someone
              takes your bet.
            </Policy>
          </Container>
        </>
      )}
    </CardWrapper>
  );
};
export default EventCard;
