import { ISelect } from "../utils/interfaces/interfaces"
import "../utils/select/js/nice-select2.js"

export class Select implements ISelect {
  readonly classSelect: string
  readonly selectText: string
  
  constructor(classSelect: string, selectText: string) {
    this.classSelect = classSelect
    this.selectText = selectText
  }

  public get selectOptions() {
    return NiceSelect.bind(document.querySelector(this.classSelect)) 
  }

  public get changeSelectOption() {
    const current = document.querySelector(`${this.classSelect} .current`)
    current.textContent = this.selectText
    return current
  }
}