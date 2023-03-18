import { BtnClass } from "./BtnAction";
import { TNodeBtns } from "../utils/types/types";

export class BtnBottom extends BtnClass {
  constructor(buttons: TNodeBtns, className: string) {
    super(buttons, className)
    buttons.forEach((btn: HTMLButtonElement) => {
      btn.addEventListener<"click">("click", () => {
          btn.classList.toggle(className)
      })
    })
  }
}