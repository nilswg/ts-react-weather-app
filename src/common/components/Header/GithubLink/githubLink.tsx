import { ReactComponent as GithubIcon } from './github.svg';
import styled from "styled-components";

const GithubLink = () => {
  return (
    <GithubLinkContainer href="https://github.com/nilswg/ts-react-weather-app">
      <GithubIcon/>
    </GithubLinkContainer>
  );
};

export default GithubLink;

const GithubLinkContainer = styled.a`
  margin-left: 1rem;
  svg {
    fill: ${({ theme }) => theme.appTitleColor};
  }
  &:hover svg {
    fill: #20546a;
  }
`;
