import React from 'react'
import Style from 'styled-components'
import StoryPreview from './StoryPreview'

const Body = ({ stories }) => {
  return (
    <Wrapper>
      <p>Total stories: {stories.length}</p>
      <Stories>
        {stories &&
          stories.map(story => (
            <StoryPreview
              businessValue={story.businessValue}
              estimation={story.estimation}
              description={story.description}
            />
          ))}
      </Stories>
    </Wrapper>
  )
}

export default Body

const Wrapper = Style.div`
 display: grid;
 height: 100%;
 width: 85%;
 grid-template-rows: 0.2fr 280px; 0.6fr;
 

 p {
   margin: 0;
   font-size: 23px;
   font-weight: 500;
   margin-top: 50px;
 }

 button {
  align-self: start;
  justify-self: center;
  font-size: 18px;
  background: rgba(0,0,0,0);
  border: 1.5px solid white;
  color: white;
  padding: 7px 29px;
  margin-top: 95px;

  :hover {
    cursor: pointer;
  }
 }
`

const Stories = Style.div`
  display: grid;
  align-content: start;	
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  overflow: scroll;
  margin-top: 20px
  margin-top: 35px;
  height: 320px;
`
