import Controller from './controller.js/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    try {
      await this.controller.progress();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;

const app = new App();
app.play();
