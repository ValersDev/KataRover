import Direction from "./direction";

class Position {
  x: number;
  y: number;
  direction: Direction;

  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
}

export default Position;
