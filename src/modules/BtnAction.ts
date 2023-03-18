import { TNodeBtns } from "../utils/types/types";

export class BtnClass {
  buttons: TNodeBtns
  btnClassActive: string
  
  constructor(buttons: TNodeBtns, btnClassActive: string) {
    this.buttons = buttons
    this.btnClassActive = btnClassActive
  }
}


