import styled from 'styled-components';
import { memo } from 'react';

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: transform 1s ease;
  background-color: black;
`;

const MemoPage = memo(Page);

export { Page, MemoPage };
