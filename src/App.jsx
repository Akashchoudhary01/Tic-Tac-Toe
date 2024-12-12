import './App.css'
import Card from './components/Card/Card'
import Grid from './components/Grid/Grid'

function App() {
  return (
    <>
    <h2>Tic-Tac-Toe Game</h2>
     <Grid numberOfCards={9}/>
     <footer className="footer">
        Developed by: Akash Choudhary
      </footer>
    </>
  )
}

export default App
