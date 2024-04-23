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
      angle = Math.acos(
        (bSide**2 + cSide**2 - aSide**2) / (2 * bSide * cSide)
      )
    }
    return angle
  }

  // return triangle area
  public area(): number {
    let area = -1
    if (this.isValid()) {
      area = Math.sqrt(
        this.semiPerimeter()
        * (this.semiPerimeter() - this.aSide)
        * (this.semiPerimeter() - this.bSide)
        * (this.semiPerimeter() - this.cSide)
      )
    }
  }

  // return triangle circumcircle radius
  public circumsicleRadius(): number {
    let circumcircle = -1
    if (this.isValid()) {
      circumcircle = (this.aSide * this.bSide * this.cSide) / (4 * this.area())
    }
    return circumcircle
}

  // find type of triangle
  public getType(): string {
    let type = "-1"
    if (this.isValid()) {
        if (this.aSide == this.bSide && this.aSide == this.bSide) {
          type = "Equilateral Triangle"
        } else if (
          this.aSide == this.bSide
            || this.bSide == this.cSide
            || this.cSide == this.aSide
        ) {
          type = "Isosceles Triangle"
        } else if (
          this.aSide**2 + this.bSide**2 == this.cSide**2
          || this.bSide**2 + this.cSide**2 == this.aSide**2
          || this.cSide**2 + this.aSide**2 == this.bSide**2
        ) {
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
    return this.aSide + this.bSide > this.cSide
      && this.bSide + this.cSide > this.aSide
      && this.cSide + this.aSide > this.bSide
  }

  // return triangle semiperimeter
  public semiPerimeter(): number {
    let value = -1
    if (this.isValid()) {
      value = (this.aSide + this.bSide + this.cSide) / 2
    }
    return value
  }
}