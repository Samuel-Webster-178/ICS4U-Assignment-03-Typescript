/*
 * Class that defines triangle.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

export class Triangle {
  private aSide: number
  private bSide: number
  private cSide: number

  // variables
  constructor(aSide: number, bSide: number, cSide: number) {
    this.aSide = aSide
    this.bSide = bSide
    this.cSide = cSide
    this.semiperimeter = (this.aSide + this.bSide + this.cSide) / 2
  }

  //get side length
  public get aSide() {
    return this.aSide
  }

  //get side length
  public get bSide() {
    return this.bSide
  }

  //get side length
  public get cSide() {
    return this.cSide
  }

  // checks if stack is empty
  public area() {
    
  }
}