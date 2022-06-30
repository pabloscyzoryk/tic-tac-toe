// styles

import './Tile.css'

export default function Tile({ handleClick, value, wonConditions, id }) {

    // straight line

    let lineClass = 'front'

    // angleLeftCondition = [2, 4, 6]
    // angleRightCondition = [0, 4, 8]
    // verticlLineConditions = [0, 3, 6],[1, 4, 7],[2, 5, 8]
 
    if(wonConditions.includes(id) && wonConditions[0] === 0 && wonConditions[1] === 4 && wonConditions[2] === 8) {
      lineClass = 'front angle-right'
    } 
    else if (wonConditions.includes(id) && wonConditions[0] === 2 && wonConditions[1] === 4 && wonConditions[2] === 6){
      lineClass = 'front angle-left'
    }
    else if(wonConditions.includes(id) && ((wonConditions[0] === 0 && wonConditions[1] === 3 && wonConditions[2] === 6) || (wonConditions[0] === 1 && wonConditions[1] === 4 && wonConditions[2] === 7) || (wonConditions[0] === 2 && wonConditions[1] === 5 && wonConditions[2] === 8))) {
      lineClass = 'front vertical-line'
    }
    else if (wonConditions.includes(id)){
      lineClass = 'front horizontal-line'
    }

    let color = value === 'X' ? 'blue' : 'green'

    return (
      <div className="tile" onClick={handleClick}>
        {<div className={lineClass} style={{ color: color }}>{value}</div>}
      </div>
    )
}
