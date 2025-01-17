import Head from 'next/head';
import Link from 'next/link';
import styled, { ThemeProvider, ThemeConsumer } from 'styled-components';
import { Users, GitHub, Power, MessageSquare, Clipboard, TrendingUp } from 'react-feather';

import { Background } from './Background';
import { Title } from './Title';
import { Center } from './Center';
import { Circle } from './Circle';
import { Edge } from './Edge';
import { CircleMenu } from './CircleMenu';
import { MenuItem } from './CircleMenu/types';

const THEME = {
  background: {
    color: '#05050f',
  },
  circle: {
    color: '#031824',
    activeColor: '#00eaff',
    content: '#fff',
  },
  edge: {
    color: '#00eaff',
  },
  oval: {
    color: '#00eaff',
    content: '#fff',
  },
  title: {
    color: '#fff',
  },
};

const menu: MenuItem[] = [
  {
    text: 'Who are we',
    element: () => (
      <a href='https://github.com/the-guild-org/'>
        <Circle size={'normal'}>
          <Users />
        </Circle>
      </a>
    ),
  },
  {
    text: 'Open Source',
    element: () => (
      <a href='https://github.com/the-guild-org/Stack'>
        <Circle size={'normal'}>
          <GitHub />
        </Circle>
      </a>
    ),
  },
  {
    text: 'Platform',
    element: () => (
      <Link href='/connected-build'>
        <a>
          <Circle size={'normal'}>
            <Power />
          </Circle>
        </a>
      </Link>
    ),
  },
  {
    text: 'Start your journey',
    element: () => (
      <a href='https://tortilla.academy/Urigo/WhatsApp-Clone-Tutorial/'>
        <Circle size={'normal'}>
          <TrendingUp />
        </Circle>
      </a>
    ),
  },
  {
    text: 'Blog',
    element: () => (
      <a href='https://medium.com/the-guild'>
        <Circle size={'normal'}>
          <Clipboard />
        </Circle>
      </a>
    ),
  },
  {
    text: 'Talk to us',
    element: () => (
      <a href='https://github.com/urigo'>
        <Circle size={'normal'}>
          <MessageSquare />
        </Circle>
      </a>
    ),
  },
];

const InColumns = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  ${Center} {
    flex: 1;
  }
`;

const HomePage = () => (
  <ThemeProvider theme={THEME}>
    <ThemeConsumer>
      {theme => {
        return (
          <>
            <Head>
              <title>The Guild</title>
              <meta name='theme-color' content={theme.background.color} />
              <meta name='Description' content='Website of The Guild' />
            </Head>
            <Background>
              <InColumns>
                <Title>The Guild</Title>
                <Center>
                  <CircleMenu
                    size={600}
                    itemSize={110}
                    edgeHeight={10}
                    edgeGap={120 * 1.5}
                    menu={menu}
                    edge={props => <Edge width={props.size[0]} />}
                  />
                </Center>
              </InColumns>
            </Background>
          </>
        );
      }}
    </ThemeConsumer>
  </ThemeProvider>
);

export default HomePage;
