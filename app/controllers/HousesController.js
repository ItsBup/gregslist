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

  // createCar(){
  //   // When submitting a form, the form will try to take you to a new page, to keep this from happening
  //   event.preventDefault()
  //   console.log('Creating a car🚗', event);
  //   const form = event.target // the event target is what HTML element evoked this function (in our case it's the form)
  //   // const formData = new FormData(form) this is typically how you get data off a form, it's behind a few layers and we don't like dealing with that mess
  //   const formData = getFormData(form)
  //   // NOTE sometimes you have to convert your data back into it's real types
  //   formData.price = parseInt(formData.price)
  //   formData.year = parseInt(formData.year)
  //   // Bools from checkboxes are a little weird
  //   formData.isElectric = formData.isElectric == 'on' ? true : false
  //    // Ternary statement                (question ? if true value : if false value )
  //   console.log('📅',formData);
  //   carsService.createCar(formData)
  //   // @ts-ignore
  //   form.reset() // clears out the inputs after the form has been submitted
  // }

  // async removeCar(carId){ // async functions have the ability to pause and wait on specified lines before continuing
  //   let isConfirmed = await Pop.confirm("are you sure you want to delete this?", 'This car seems pretty cool you know', 'Yeah trash it', 'error') //await makes this line pause until it's done
  //   if( isConfirmed){
  //   // if(window.confirm('Are you sure you want to delete this car?')){
  //      console.log('deleting', carId);
  //     carsService.removeCar(carId)
  //   }
  // }
}