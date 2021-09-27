import React from "react";
import "./App.css";
import { userColection, PetTypeEnum, InsuranceStatusEnum } from "./Pet";
import { CreatePet } from "./components";

/*
Manage Pet Insurance 

We would like you to create a web application to allow users to manage their pet insurance. 

A pet has a name, an age, a type (“Cat”, “Dog”, “Lizard” or “Other”) and has an insurance status (“Fully covered”, “Accident only”, “No cover”) 

One approach could be: 

·         A web page displaying the list of existing pets 

·         A form on the page to insert a new pet 

·         A back-end API to get the list of pets 

·         A back-end API to insert a new pet 

·         An object in the server's memory to store the pets 

*/
console.log(userColection.getPets());
userColection.addPet({
  name: "gu",
  type: PetTypeEnum.cat,
  insuranceStatus: InsuranceStatusEnum.accidentOnly
});
console.log(userColection.getPets());

function App() {
  const allPets = userColection.getPets();

  return (
    <div className="App">
      <header className="App-header">My Pet Insurance</header>
      <CreatePet />
      <div className="petsContainer">
        {allPets.map((pet) => (
          <div className="petCard">
            <p>{pet.name}</p>
            <p>{pet.type}</p>
            <p>{pet.age}</p>
            <p>{pet.insuranceStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
