import React from 'react';
import Style from 'styled-components';
import Task from '../Task/Task';
import SprintDetails from '../SprintDetails/SprintDetails';

export default () => {
  return (
    <Wrapper>
      <Left>
        <Task
          id={4}
          story={`Display statement balance upon 
                authentication. Say for example $1560`}
          estimation={120}
          responsible={'bobert'}
          status={'New'}
        />
        <Task
          id={2}
          story={`I have to write something here
                    becouse of the sun`}
          estimation={1000}
          responsible={'Maria'}
          status={'In progress'}
        />
        <Task
          id={10}
          story={`Kamaro halabala mon ik lkad
                    hello bello mello`}
          estimation={500}
          responsible={'Kitty'}
          status={'Review'}
        />
        <Task
          id={11}
          story={`Display statement balance upon 
                authentication. Say for example $1560`}
          estimation={120}
          responsible={'bobert'}
          status={'Done'}
        />
      </Left>
      <Right>
          <SprintDetails />
      </Right>
    </Wrapper>
  );
};

const Wrapper = Style.div`
  display: flex;
  padding: 30px 10px;
  color: #2D4D60;
`;

const Left = Style.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0px 15px;
`;

const Right = Style.div`
  width: 40%;
  padding: 10px 15px;
`;
