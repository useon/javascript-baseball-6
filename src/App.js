import Controller from './controller.js/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    this.controller.progress();
  }
}

export default App;

const app = new App();
app.play();
