import { TElement } from "../utils/types/types";
import { Select } from "./Select.d";

export class ModalSelect extends Select {
  readonly optionsSelect: TElement
 

  constructor(classSelect: string, selectText: string) {
    super(classSelect, selectText)
    super.selectOptions
    super.changeSelectOption

    this.getOptionsElements
  }

  private set setOptionsColor({optionContent, optionElem}: any) {
    switch (optionContent) {
      case "New":
        optionElem?.classList.add("option_new")
        break;
      case "In progress":
        optionElem?.classList.add("option_progress")
        break;
      case "Rejected":
        optionElem?.classList.add("option_rejected")
        break;
      case "Solved":
        optionElem?.classList.add("option_solved")
        break;
      case "Deferred":
        optionElem?.classList.add("option_deferred")
        break
      default:
        optionElem?.classList.add("option_review")
        break;
    }
  }

  get getOptionsElements() {
    const buttons = document.querySelectorAll(`${this.classSelect} .option`)
    return buttons.forEach((option) => {
      this.setOptionsColor = {optionContent: option.textContent, optionElem: option}
    })  
  }
}

