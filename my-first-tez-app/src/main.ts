import '../assets/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function main() {
  const app = document.getElementById('app')
  if (app) {
    app.innerHTML = `
      <div class="container">
        <h1>Hello, Vite + TypeScript + TezJS!</h1>
        <div class="card">
          <div class="card-body">
            <p>Click on the Vite and TypeScript logos to learn more</p>
          </div>
        </div>
      </div>
    `
  }
}

export default main;