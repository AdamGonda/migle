import React from 'react'
import Style from 'styled-components'
import NewSprintForm from './NewSprintForm'
import { createSprint } from '../../redux/actions/sprint'
import { connect } from 'react-redux'
import StoryPreview from './StoryPreview'
import Header from './Header'


const SprintModal = ({ createSprint, match, closeModal }) => {
  
  return (
    <Wrapper>
      <Header closeModal={closeModal}/>
      <Body>
        <p>Total stories: {4}</p>
        <Stories>
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
          <StoryPreview businessValue={20} estimation={4} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u Lorem Ipsum has been the industrys standard dummy te'} />
        </Stories>
        <button>Create sprint</button>
      </Body>
    </Wrapper>
  )
}

const mapStateToPops = state => {
  return {}
}

const mapDispatchToPorps = dispatch => {
  return {
    createSprint: (name, owner, stories) =>
      dispatch(createSprint({ name, owner, stories }))
  }
}

export default connect(
  mapStateToPops,
  mapDispatchToPorps
)(SprintModal)

const Body = Style.div`
 display: grid;
 height: 100%;
 width: 85%;
 grid-template-rows: 0.2fr 280px; 0.6fr;
 

 p {
   margin: 0;
   font-size: 23px;
   font-weight: 500;
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
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  overflow: scroll;
  margin-top: 20px
  height: 320px;
`

const Wrapper = Style.div`
  display: grid; 
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 104, 178, 0.9);
  z-index: 1;
  color: white;
  animation: showUp 0.2s ease-in;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`
