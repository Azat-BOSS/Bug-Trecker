export enum usersTmpData {
  tmpClass =  "template-usr",
  tmpClassCont = ".template-usr__container",
  tmplUsrId = ".template-usr__id",
  tmplUsrBug = ".template-usr__bug",
  tmplUsrApp = ".template-usr__app",
  tmplUsrStatus = ".template-usr__status",
  tmplUsrData = ".template-usr__data"
}

export const main = document.querySelector(".main")
export const tmplContainer = document.createElement("div")
export const textBuffer = main?.querySelector(".info__button-text")
export const buttonBuffer = main?.querySelector(".info__button-copy")
export const btnsInfoBottom = main?.querySelectorAll(".info__bottom-button")
export const modal = document.querySelector(".modal")
export const btnModal = main?.querySelector(".info__middle-button")
export const btnCloseModal = modal?.querySelector(".modal__button-close")
