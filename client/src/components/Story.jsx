import React from 'react'
import StoryTile from './StoryTile'
import storyTilesData from '../assets/data/storyTilesData'

const Story = () => {
  return (
    <div className='story'>
      <h3>Read the Gemarse story</h3>
      <div className='gallery-grid'>
        {storyTilesData.map((tile, index) => (
          <StoryTile key={index} to={tile.to} imgSrc={tile.imgSrc} message={tile.message} title={tile.title} />
        ))}
      </div>
    </div>
  )
}

export default Story
