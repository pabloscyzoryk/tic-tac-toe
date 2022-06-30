// styles
import './Board.css'

// imports
import { useState } from 'react'
 
// component imports
import Tile from './Tile'


export default function Board() {

    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    const [turns, setTurns] = useState(0)
    let wonConditions = Array(3).fill(null)
    let status = 'X to move'

    const calculateWinner = tiles => {
        const winningPatterns = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ]
        
        for (let i = 0; i < winningPatterns.length; i++) {
          const [a, b, c] = winningPatterns[i];
          if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            wonConditions = [a, b, c]
            return tiles[a];
          }
        }
        return null;
      }

      const winner = calculateWinner(tiles)
  
    if(winner) {
        status = `Winner: ${winner}`
    } else {
        status = `${isX ? 'X' : 'O'} to move`
    }

    const handleClick = (e, i) => {

        if (calculateWinner(tiles) || tiles[i]) return

        tiles[i] = isX ? 'X' : 'O'
        setTiles(tiles)
        setTurns(prevTurns => {return prevTurns + 1})
        setIsX(!isX)
    }

    const handleRestart = () => {
        wonConditions = Array(3).fill(null)
        setTurns(0)
        setIsX(true)
        setTiles(Array(9).fill(null))
    }

    if(turns === 9 && !winner) status = 'Draw'

    return (
        <>
          <div className="board">
              <Tile id={0} wonConditions={wonConditions} value={tiles[0]} handleClick={e => {handleClick(e, 0)}}/>
              <Tile id={1} wonConditions={wonConditions} value={tiles[1]} handleClick={e => {handleClick(e, 1)}}/>
              <Tile id={2} wonConditions={wonConditions} value={tiles[2]} handleClick={e => {handleClick(e, 2)}}/>
              <Tile id={3} wonConditions={wonConditions} value={tiles[3]} handleClick={e => {handleClick(e, 3)}}/>
              <Tile id={4} wonConditions={wonConditions} value={tiles[4]} handleClick={e => {handleClick(e, 4)}}/>
              <Tile id={5} wonConditions={wonConditions} value={tiles[5]} handleClick={e => {handleClick(e, 5)}}/>
              <Tile id={6} wonConditions={wonConditions} value={tiles[6]} handleClick={e => {handleClick(e, 6)}}/>
              <Tile id={7} wonConditions={wonConditions} value={tiles[7]} handleClick={e => {handleClick(e, 7)}}/>
              <Tile id={8} wonConditions={wonConditions} value={tiles[8]} handleClick={e => {handleClick(e, 8)}}/>

          </div>
            <div className="status-btn-wrapper">
              <p className="status">{status}</p>
              <button className="restart" onClick={() => {handleRestart()}}>Restart Game</button>
            </div>
        </>
    )
}
