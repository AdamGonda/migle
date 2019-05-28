import React from 'react'
import Style from 'styled-components';
import ProfilePicture from '../../dummy data/profile pictures/Olivia.png'
import StatusIndicator1 from './status indicator 1.svg'
import StatusIndicator2 from './status indicator 2.svg'
import StatusIndicator3 from './status indicator 3.svg'
import StatusIndicator4 from './status indicator 4.svg'
import Separator from './separator.svg'

export default ({id, story, estimation, responsible, status}) => {

    const calculateStatusBarImage = (status) => {
        switch(status){
            case 'New': return StatusIndicator1
            case 'In progress': return StatusIndicator2
            case 'Review': return StatusIndicator3
            case 'Done': return StatusIndicator4
        }
    }

    let CurrentStatusIndicator = calculateStatusBarImage(status);

    return (
        <Wrapper>
            <IdAndDep>
                <p>{id}</p>
            </IdAndDep>
            <Story>
                <p>
                {story}
                </p>
            </Story>

            <img src={Separator} style={SeparatorStyle}/>

            <Estimation>
                {estimation}
            </Estimation>

            <img src={Separator} style={SeparatorStyle}/>
            <Responsible>
                <img src={ProfilePicture}/>
                <p>{responsible}</p>
            </Responsible>

            <img src={Separator} style={SeparatorStyle}/>

            <Status>
                <p>{status}</p>
                <img src={CurrentStatusIndicator} />
            </Status>
        </Wrapper>
    )
}

const SeparatorStyle = {
    height: '45px'
}

const Wrapper = Style.div`
    display: flex;
    align-items: center;
    justify-content:space-between; 
    border: 1px solid white;
    background-color: #DFE1E6;
    height: 76px;
    border-radius: 25px;
    margin: 10px 0px;
    padding: 0px 22px 0px 20px;
`;

const IdAndDep = Style.div`
    bacground-color: rgba(0,0,0,0);
    border: 1.5px solid #2D4D60;
    border-radius: 30px;
    width: 49px;
    height: 49px;
    display: flex;
    align-items: center;

    p {
        font-weight: 600;
        font-size: 24px;
        margin: 0px auto;
    }
`;

const Story = Style.div`
    width: 242px;
    font-size: 12px;
`;

const Estimation = Style.div`
   font-size: 23px;
   font-weight: 500;
`;

const Responsible = Style.div`
    text-align: center;

    img {
        border-radius: 20px;
        widht: 34px;
        height: 34px;
        margin-bottom: -3px;
    }

    p {
        margin: 0px;
        font-weight: 600;
        font-size: 13px;
    }
`

const Status = Style.div`
    text-align: center;

    p {
        font-size: 22px;
        margin: 0px;
        margin-bottom: 5px;
    }

    img {
        width: 117px;   
    }
`