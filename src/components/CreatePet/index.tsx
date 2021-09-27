import { PetTypeEnum, InsuranceStatusEnum } from "../../Pet";

import "./styles.css";

export const CreatePet = () => {
  const petTypes = Object.keys(PetTypeEnum) as Array<keyof typeof PetTypeEnum>;
  const insuranceTypes = Object.keys(InsuranceStatusEnum) as Array<
    keyof typeof InsuranceStatusEnum
  >;

  const handleCreate = () => {};
  return (
    <div className="createPetContainer">
      <input type="text" placeholder="pet name" />
      <input type="text" placeholder="pet age" />
      <label>
        Pick your pet type:
        <select>
          {petTypes.map((type) => (
            <option value={type}>{PetTypeEnum[type]}</option>
          ))}
        </select>
      </label>
      <label>
        Pick your insurance status:
        <select>
          {insuranceTypes.map((type) => (
            <option value="grapefruit">{InsuranceStatusEnum[type]}</option>
          ))}
        </select>
      </label>
      <button onClick={handleCreate}>Add</button>
    </div>
  );
};
