/*
 * Class that defines triangle.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export class Triangle {
  private sides: number[3]

  // variables
  constructor(aSide: number, bSide: number, cSide: number) {
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
    
  }

  // return triangle area
  public area(): number {
    return Math.sqrt(this.semiPerimeter() * (this.semiPerimeter() - this.aSide) * (this.semiPerimeter() - this.bSide) * (this.semiPerimeter() - this.cSide))
  }

  public semiPerimeter(): number {
    return (this.aSide + this.bSide + this.cSide) / 2
  }
}