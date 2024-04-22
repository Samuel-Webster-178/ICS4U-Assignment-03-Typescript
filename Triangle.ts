/*
 * Class that defines triangle.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export default class Triangle {
  private sides: number[]

  // variables
  constructor(aSide: number, bSide: number, cSide: number) {
    this.sides = []
    this.sides[0] = aSide
    this.sides[1] = bSide
    this.sides[2] = cSide
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
    angleNumber = (angleNumber - 1) // 1-3 to 0-2
    const aSide = this.sides[angleNumber]
    const bSide = this.sides[(angleNumber + 1) % 3]
    const cSide = this.sides[(angleNumber + 2) % 3] //wrap to lower bound
    let angle = -1
    if (this.isValid()) {
      angle = Math.acos((bSide**2 + cSide**2 - aSide**2) / (2 * bSide * cSide))
    }
    return angle
  }

  // return triangle area
  public area(): number {
    return Math.sqrt(
        this.semiPerimeter()
        * (this.semiPerimeter() - this.sides[0])
        * (this.semiPerimeter() - this.sides[1])
        * (this.semiPerimeter() - this.sides[2])
      )
  }

  // return triangle circumcircle radius
  public circumsicleRadius(): number {
    let circumcircle = -1
    if (this.isValid()) {
      circumcircle = (this.sides[0] * this.sides[1] * this.sides[2]) / (4 * this.area())
    }
    return circumcircle
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

  // return triangle height
  public height(sideNumber: number): number {
    let height = -1
    if (this.isValid()) {
      height = (2 * this.area()) / this.sides[sideNumber - 1] // 1-3 to 0-2
    }
    return height
  }

  // return triangle inner circle radius
  public innerCircleRadius(): number {
    let innerCircleRadius = -1
    if (this.isValid()) {
        innerCircleRadius = this.area() / this.semiPerimeter()
    }
    return innerCircleRadius
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