import { TElement } from "../utils/types/types";

export class Modal {
  modal: TElement
  button: TElement
  className: string
  btnCloseModal: TElement

  constructor(modal: TElement, buttonOpen: TElement, className: string, btnCloseModal: TElement) {
    this.modal = modal
    this.button = buttonOpen
    this.className = className
    this.btnCloseModal = btnCloseModal
  }

  public set setBtnStyle(className: string) {
    this.modal?.classList.add(className)
  }

  public set removeBtnStyle(className: string) {
    this.modal?.classList.remove(className)
  }

  public get handleCloseEsc() {
    return document.addEventListener("keydown", (evt: any) => {
      if(evt.key === "Escape") {
        this.removeBtnStyle = this.className
      }
    })
  }
}

