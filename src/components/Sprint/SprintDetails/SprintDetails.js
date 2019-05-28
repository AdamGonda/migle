import React from 'react';
import Style from 'styled-components';
import Bubble from './Bubble';
import CompletedIcon from './assets/completed icon.svg'
import Week from './Week';
import Chart from './Chart';

export default () => {
    const dummyDays = [
        {name: 'Monday', ideal: 50.8, remaining: 60.8},
        {name: 'Tuesday', ideal: 40, remaining: 45}, 
        {name: 'Wednesday', ideal: 30.1, remaining: 30}, 
        {name: 'Thursday', ideal: 10.8, remaining: 2}
    ]
    
    return (
        <Wrapper>
            <Header>
                <Bubble title={<img src={CompletedIcon} style={{width:'23px', margin: '0px 3.5px -1px -6px'}}/>} number={'9/12'}/>
                <Bubble title={'Ideal'} number={'58'}/>
                <Bubble title={'Estimation'} number={'60.8'}/>
            </Header>
            <Body>
                <Week days={dummyDays}/>
                <Chart ideal={[60,50,40, 0]} remaining={[55, 45, 35, 0]}/>
            </Body>
        </Wrapper>
    )
}

const Wrapper = Style.div``

const Header = Style.div`
    display: flex;
    justify-content: space-between;
`

const Body = Style.div`
    margin-top: 20px;
`