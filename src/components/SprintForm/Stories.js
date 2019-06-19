import React from 'react'
import { Wrapper, Stories } from './styles/Stories'
import StoryPreview from './StoryPreview'

export default ({ stories, isAddStory }) => {
  return (
    <Wrapper>
      {!isAddStory ? (
        <p>Total stories: {stories.length}</p>
      ) : (
        <p>Could depend on:</p>
      )}
      <Stories>
        {stories &&
          stories.map((story, idx) => (
            <StoryPreview
              key={idx}
              businessValue={story.businessValue}
              description={story.description}
              idForUsers={story.idForUsers}
            />
          ))}
      </Stories>
    </Wrapper>
  )
}
