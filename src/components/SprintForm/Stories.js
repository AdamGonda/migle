import React from 'react'
import { Wrapper, Stories } from './styles/Stories'
import StoryPreview from './StoryPreview'

export default ({ stories, isStoriesForm }) => {
  return (
    <Wrapper>
      {!isStoriesForm ? (
        <p>Total stories: {stories.length}</p>
      ) : (
        <p>Could depend on:</p>
      )}
      <Stories>
        {stories &&
          stories.map((story, idx) => (
            <StoryPreview
              key={idx}
              descriptionLimit={140}
              businessValue={story.businessValue}
              description={story.description}
              idForUsers={story.idForUsers}
            />
          ))}
      </Stories>
    </Wrapper>
  )
}
