import React from 'react';
import Style from 'styled-components';
import magnifying from './assets/magnifying glass icon.svg'

export default () => {
  return (
    <Wrapper>
        <input type="search"  placeholder='Search' size="5"/>
        <img alt="magnifying glass" src={magnifying} ></img>
    </Wrapper>
  )
}

const strechTransition = 0.2

const Wrapper = Style.div`
  position: relative;
  padding: 0;
  margin: 25px;
  display: flex;
  align-items: center;

  p {
      display: inline;
      position:absolute;
  }

  img {
      position:absolute;
      height: 11px;
      width: 0px;
      left: 1px;
      margin-left: -7px;
      
  }

  input {
    text-align: center;
    font-size: 16px;
    padding-left: 26px;
    padding-right: 6px;
    font-weight: 300;
    padding-bottom: 3px;
    width: 150px !important;
    caret-color: white;
    color: white;
    background-color: rgba(0,0,0,0);
    border: 2px solid white;
    border-radius: 20px;
    width: 157px;
    height: 29px;
    transition-property: width;
    transition-duration: ${strechTransition}s;
  }

  input::placeholder {
    color: white;
  }

  input:focus {
    outline: none !important;
    width: 210px !important;
    transition-property: width;
    transition-duration: ${strechTransition}s;
  }
`