import React from 'react';
import Style from 'styled-components';
import Left from './Left'
import Middle from './Middle';
import Right from './Right';

export default () => {
  return (
    <Wrapper>
      <Left />
      <Middle />
      <Right />
    </Wrapper>
  );
};

const Wrapper = Style.div`
  padding: 0px 0px 0px 0px;
  background-color: #0094FF;
  height: 90px;
  color: white;
  font-size:44px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 52px;
  padding-right: 52px;
`;