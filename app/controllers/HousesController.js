import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";




export class HousesController{
  constructor(){
    console.log('🏚️ home home');
    houseService.loadHouses()
    this.drawHomeHome() // HomeHome is houseCard
    AppState.on('houses', this.drawHomeHome) 
  }

  drawHomeHome(){
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content +=house.HomeHome)
    document.getElementById('home-home').innerHTML = content
  }

  createHouse(){
    event.preventDefault()
    const form = event.target 
    const formData = getFormData(form)
    houseService.createHouse(formData)
    form.reset()
  }

  async removeHouse(houseId){
    let isConfirmed = await Pop.confirm("WARNING?!?", 'ONCE YOU TAKE THIS PATH THERE IS NO RETURN', 'Yeah trash it', 'error')
    if( isConfirmed){
    houseService.removeHouse(houseId)
    }
  }
}