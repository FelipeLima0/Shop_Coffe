import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-top: 5.875rem;
  margin-bottom: 5rem;

  h2 {
    font-family: "Baloo 2", cursive;
    font-size: 32px;
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3rem;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  gap: 11rem;
  margin-bottom: 5rem;
`;

export const RightHome = styled.div``;

export const LeftHome = styled.div`
  h1 {
    margin-bottom: 1rem;
    font-family: "Baloo 2", cursive;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  text {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  section {
    margin-top: 4rem;
    display: flex;
  }

  p {
    margin-bottom: 2rem;
    margin-right: 2rem;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const BaseCircle = styled.span`
  border-radius: 100%;
  margin-right: 0.2rem;
`;

export const CircleYellowDark = styled(BaseCircle)`
  border: 6px solid ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-dark"]};
`;

export const CircleYellow = styled(BaseCircle)`
  border: 6px solid ${(props) => props.theme["yellow"]};
  background: ${(props) => props.theme["yellow"]};
`;

export const CircleBlack = styled(BaseCircle)`
  border: 6px solid ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-text"]};
`;

export const CirclePurple = styled(BaseCircle)`
  border: 6px solid ${(props) => props.theme["purple"]};
  background: ${(props) => props.theme["purple"]};
`;
