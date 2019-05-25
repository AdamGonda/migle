import React from 'react';
import Style from 'styled-components';
import mainBtn from './assets/main button icon.svg';
import Search from './Search';

export default () => {
  return (
    <Wrapper>
      <a href="/">migle</a>
      <Search />
      <img alt="main button" src={mainBtn} />
    </Wrapper>
  );
};

const Wrapper = Style.div`
  padding: 0px 0px 0px 0px;
  background-color: #0094FF;
  height: 83.5px;
  color: white;
  font-size:44px;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-left: 52px;
  padding-right: 52px;

  a:link {
    text-decoration: none;
  }
  
  a:visited {
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: none;
  }
  
  a:active {
    text-decoration: none;
  }
  
  a {
    color: white;
    margin-top: -7px;
  }

  img {
    width: 43px;
  }
`;