import React, { useMemo } from 'react';
import styled from 'styled-components';

import { device } from '../../media';
import { useFontColor } from '../theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${useFontColor('light')};
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const TitleText = styled.span`
  font-size: 60px;
  font-weight: bold;
  line-height: 1.14;
  letter-spacing: -0.2px;
  color: ${props => props.theme.hero.titleColor};

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const HighlightText = styled(TitleText)`
  color: ${props => props.theme.hero.highlightColor};
`;

const TitleContainer = styled.div`
  margin: 15px 0;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: ${useFontColor('light')};
`;

export const Title: React.FunctionComponent<{
  subtitle: string;
  title: string;
  highlight: string;
  description: string;
}> = ({ subtitle, description, title, highlight }) => {
  const [before, middle, after] = useMemo(() => {
    const start = title.indexOf(highlight);
    const end = start + highlight.length;

    return [title.substr(0, start), highlight, title.substr(end)];
  }, [title, highlight]);

  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <TitleContainer>
        <TitleText>{before}</TitleText>
        <HighlightText>{middle}</HighlightText>
        <TitleText>{after}</TitleText>
      </TitleContainer>
      <Text>{description}</Text>
    </Container>
  );
};
