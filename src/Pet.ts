export interface Pet {
  name: string;
  age?: number;
  type: PetTypeEnum;
  insuranceStatus: InsuranceStatusEnum;
}

export enum PetTypeEnum {
  cat = "Cat",
  dog = "Dog",
  lizard = "Lizard",
  other = "Other"
}

export enum InsuranceStatusEnum {
  fullyCovered = "Fully Covered",
  accidentOnly = "Accident Only",
  noCover = "No Cover"
}

const pet = {
  name: "Mew",
  age: 10,
  type: PetTypeEnum.dog,
  insuranceStatus: InsuranceStatusEnum.fullyCovered
};

//A pet has a name, an age, a type (“Cat”, “Dog”, “Lizard” or “Other”)
//and has an insurance status (“Fully covered”, “Accident only”, “No cover”)

class PetInsuranceHandler {
  pets: Pet[];
  userName: string;

  constructor(userName: string) {
    this.userName = userName;
    this.pets = [pet];
  }

  getPets() {
    return this.pets;
  }

  addPet(newPet: Pet) {
    this.pets = [...this.pets, newPet];
  }

  // removePetByName
}

export const userColection = new PetInsuranceHandler("StefanColection");
