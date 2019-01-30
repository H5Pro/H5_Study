/**
 * Created by fjl on 2019/1/29
 */

function Square(props) {
  return (
    <button
      onClick={props.onClick}
      className="square">
      {props.value}
    </button>
  )
}

// 判断输赢
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
  constructor(props) {
    super(props)
  }
  renderSquare(i) {
    const {squares, onClick} = this.props
    return <Square
      key={i}
      value={squares[i]}
      onClick={() => onClick(i)}
    />
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNum: 0
    }
  }
  // 处理棋盘格子的点击事件
  handleClick(index) {
    const {xIsNext, history, stepNum} = this.state
    const current = history[stepNum]
    if (current.squares[index] || calculateWinner(current.squares)) {
      return
    }
    const squares = [...current.squares]
    squares[index] = xIsNext ? 'X' : 'O'
    this.setState({
      xIsNext: !xIsNext,
      stepNum: stepNum + 1,
      history: history.slice(0, stepNum + 1).concat([{squares}])
    })
  }
  // 跳转到某次落子
  jumpTo(step) {
    this.setState({stepNum: step, xIsNext: step % 2 === 0})
  }
  render() {
    const {xIsNext, history, stepNum}= this.state
    const current = history[stepNum]
    const winner = calculateWinner(current.squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    const moves = this.state.history.map((item, index) => {
      const text = index ? 'Move #' + index : 'game start'
      return (
        <li key={index}>
          <a href="#" onClick={() => {this.jumpTo(index)}}>Go to{text}</a>
        </li>
      )
    })
    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(i) => this.handleClick(i)}
            squares={current.squares}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
