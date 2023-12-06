import { router } from './router-config.js';

class App {

  router = router

  banana = 'banana'

}


const app = new App()
// @ts-ignore
window.app = app
