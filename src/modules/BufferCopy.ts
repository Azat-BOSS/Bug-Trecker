import { TElement } from "../utils/types/types";

export class BufferCopy {
  readonly buttonBuffer: TElement
  readonly textBuffer: TElement

  constructor(buttonBuffer: TElement, textBuffer: TElement) {
    this.buttonBuffer = buttonBuffer
    this.textBuffer = textBuffer

    this.buttonBuffer?.addEventListener("click", () => {
      this.copyClipboard
    })
  }

  public get copyClipboard() {
    const textButtonBuff: any = this.buttonBuffer?.textContent 
    navigator.clipboard.writeText(textButtonBuff)
    setTimeout(() => {
      this.textBuffer!.textContent = "Click to copy"
    }, 3000)
    return this.textBuffer!.textContent = "Success"
  }
}