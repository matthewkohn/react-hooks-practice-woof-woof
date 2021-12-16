import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogDisplay from "./DogDisplay";

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDogId, setSelectedDogId] = useState(null);
  const [goodDogs, setGoodDogs] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(r => r.json())
      .then(setDogs);
  }, []);

  function onUpdateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) => dog.id === updatedDog.id ? updatedDog : dog);
    setDogs(updatedDogs);
  }

  function handleToggleFilter() {
    setGoodDogs((goodDogs) => !goodDogs);
  }

  const selectedDog = dogs.find((dog) => dog.id === selectedDogId);

  let displayDogs = dogs;
  if (goodDogs) {
    displayDogs = displayDogs.filter((dog) => dog.isGoodDog);
  }

  return (
    <div className="App">
      <Filter 
        goodDogs={goodDogs}
        onFilterClick={handleToggleFilter}
      />  
      <DogBar 
        dogs={displayDogs}
        onDogClick={setSelectedDogId}
      />
      <DogDisplay 
        dog={selectedDog}
        onUpdateDog={onUpdateDog}
      />
      
    </div>
  );
}

export default App;
