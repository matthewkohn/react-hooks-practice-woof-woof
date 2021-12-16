import React from 'react';


function DogBar({ dogs, onDogClick }) {
  
  const dogList = dogs.map((dog) => (
    <span key={dog.id} onClick={() => onDogClick(dog.id)}>{dog.name}</span>
  ))

  return (
    <div id="dog-bar">{dogList}</div>
  )
}

export default DogBar;