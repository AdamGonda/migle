import React from 'react'
import { Wrapper, Stories } from './styles/Stories'
import StoryPreview from './StoryPreview'

export default ({ stories, isStoriesForm }) => {
  const showExplanatoryCaption = () =>
    !isStoriesForm ? (
      <p>Total stories: {stories.length}</p>
    ) : (
      <p>Could depend on:</p>
    )
  return (
    <Wrapper>
      {stories && stories.length > 0 ? showExplanatoryCaption() : null}
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
