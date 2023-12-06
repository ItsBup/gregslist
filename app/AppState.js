import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

// NOTE before we converted the Car constructor over to use data
  // cars = [
  //   new Car('Bat', 'Mobile', 1983, 'black', 'https://robbreport.com/wp-content/uploads/2022/11/AS_1989-batmobile-w-b-2.jpg?w=1000', 2000000000, true),
  //   new Car('Ford', 'Model T', 1922, 'red', 'https://cdn.dealeraccelerate.com/vcc/1/607/26914/1920x1440/1922-ford-model-t', 50, false)
  // ]

  cars = [
    new Car({
      make: 'Bat',
      model: 'Mobile',
      year: 1983,
      color: 'black',
      imgUrl: 'https://robbreport.com/wp-content/uploads/2022/11/AS_1989-batmobile-w-b-2.jpg?w=1000',
      price: 2000000000,
      isElectric: true
    }),
    new Car({
      make: 'Ford',
      model: 'Model T',
      year: 1922,
      color: 'red',
      imgUrl: 'https://cdn.dealeraccelerate.com/vcc/1/607/26914/1920x1440/1922-ford-model-t',
      price: 50,
      isElectric: false
    })
  ]
  
  houses = [
    new House({
      bedrooms: 12,
      bathrooms: 1,
      location: 'Nebraska',
      color: 'pink',
      imgUrl: 'https://i.insider.com/58e24537dd0895e67c8b4a05?width=1200&format=jpeg',
      price: 2,
      sqft: 10000
    })
  ]
}



export const AppState = createObservableProxy(new ObservableAppState())