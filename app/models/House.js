import { generateId } from "../utils/GenerateId.js"



export class House{
  constructor(data){
    this.id = generateId()
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.location = data.location
    this.color = data.color
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.sqft = data.sqft
  }

//   get CarCard(){
//     // return `${this.make} ${this.model}🚗`
//     return `
// <div class="col-6 col-md-4">
//   <div class="card">
//     <img class="img-fluid listing-img rounded-top"
//       src="${this.imgUrl}"
//       alt="">
//     <div class="p-2">
//       <h3>${this.make} ${this.model} ${this.year} <i style="color: ${this.color};" class="mdi mdi-car car-icon"></i></h3>
//       <p>$${this.price}</p>
//       <button onclick="app.CarsController.removeCar('${this.id}')" class="btn btn-danger" title="delete this listing forever"><i class="mdi mdi-delete-forever"></i></button>
//     </div>
//   </div>
// </div>
// `
//   }
}