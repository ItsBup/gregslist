import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { loadState, saveState } from "../utils/Store.js";




class HouseService{
  createHouse( formData){
    let createdHouse = new House(formData)
    console.log('created a house', createdHouse);
    AppState.houses.push(createdHouse)
    this.saveHouses()
  }

  removeHouse(houseId){
    const indexToRemove = AppState.houses.findIndex(house => house.id == houseId)
    if(indexToRemove > -1){
      AppState.houses.splice(indexToRemove,1)
      this.saveHouses()
    }
  }

  saveHouses(){
    saveState('houses', AppState.houses)
  }

  loadHouses(){
    let loadedHouses = loadState('houses', [House])
    AppState.houses = loadedHouses
  }

}

export const houseService = new HouseService()