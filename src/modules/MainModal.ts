import { Modal } from "./Modal";
import { TElement } from "../utils/types/types";

export class MainModal extends Modal {
  modal: TElement
  button: TElement
  className: string
  btnCloseModal: TElement

  constructor(modal: TElement, buttonOpen: TElement, className: string, btnCloseModal: TElement) {
    super(modal, buttonOpen, className, btnCloseModal)
    super.handleCloseEsc

    this.modal = modal
    this.button = buttonOpen
    this.className = className
    this.btnCloseModal = btnCloseModal

    this.handleOpenModal
    this.handleCloseModal
  }

  private get handleOpenModal() {
    return this.button?.addEventListener("click", () => {
      super.setBtnStyle = this.className
    })
  }

  private get handleCloseModal() {
    return this.btnCloseModal?.addEventListener("click", () => {
      super.removeBtnStyle = this.className
    })
  }
}