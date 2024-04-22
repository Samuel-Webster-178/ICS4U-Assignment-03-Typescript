/*
 * Class that defines triangle.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export default class Triangle {
  private sides: number[3]
  //private sidePairs: number[3][2]

  // variables
  constructor(aSide: number, bSide: number, cSide: number) {
    this.sides[0] = aSide
    this.sides[1] = bSide
    this.sides[2] = cSide
    //for (let i = 0; i < 3; i++) {
    //  this.sidePairs[i][0] = i
    //  this.sidePairs[i][1] = (i + 1) % 3 //wrap val to pair 2, 0
    //}
  }

  //get side length
  public get aSide() {
    return this.sides[0]
  }

  //get side length
  public get bSide() {
    return this.sides[1]
  }

  //get side length
  public get cSide() {
    return this.sides[2]
  }

  // return angle
  public angle(angleNumber: number): number {
    const aSide = this.sides[angleNumber]
    const bSide = this.sides[(angleNumber + 1) % 3]
    const cSide = this.sides[(angleNumber + 2) % 3] //wrap to lower bound
    let angle = -1
    if (this.isValid()) {
      angle = Math.acos((this.bSide**2 + this.cSide**2 - this.aSide**2) / (2 * this.bSide * this.cSide))
    }
    return this.angle
  }

  // return triangle area
  public area(): number {
    return Math.sqrt(this.semiPerimeter() * (this.semiPerimeter() - this.sides[0]) * (this.semiPerimeter() - this.sides[1]) * (this.semiPerimeter() - this.sides[2]))
  }

  // find type of triangle
  public getType(): string {
    let type = "-1"
    if (this.isValid()) {
        if (this.sides[0] == this.sides[1] && this.sides[0] == this.sides[2]) {
          type = "Equilateral Triangle"
        } else if (
          this.sides[0] == this.sides[1]
            || this.sides[1] == this.sides[2]
            || this.sides[2] == this.sides[0]
        ) {
          type = "Isosceles Triangle"
        } else if (this.sides[0]**2 + this.sides[1]**2 == this.sides[2]**2) {
          type = "Right Triangle"
        } else {
          type = "Scalene Triangle"
        }
    }

    return type
  }

  // sum of any two sides is not greater than third side
  public isValid(): boolean {
    return this.sides[0] + this.sides[1] > this.sides[2]
      && this.sides[1] + this.sides[2] > this.sides[0]
      && this.sides[2] + this.sides[0] > this.sides[1]
  }

  // return triangle semiperimeter
  public semiPerimeter(): number {
    let value = -1
    if (this.isValid()) {
      value = (this.sides[0] + this.sides[1] + this.sides[2]) / 2
    }
    return value
  }
}