import { 
  tmplContainer, 
  main, 
  usersTmpData, 
  buttonBuffer, 
  textBuffer, 
  btnsInfoBottom,
  modal,
  btnModal,
  btnCloseModal
} from "./utils/constants/constants"

import { UsersTmpl } from "./modules/UsersTmp"
import { HeaderSelect } from "./modules/HeaderSelect"
import { InfoSelectQuest } from "./modules/InfoSelectQuest"
import { BufferCopy } from "./modules/BufferCopy"
import { BtnBottom } from "./modules/BtnBottom"
import { MainModal } from "./modules/MainModal"
import { ModalSelect } from "./modules/ModalSelect"

new BtnBottom(btnsInfoBottom, "info__bottom-button_active")
new BufferCopy(buttonBuffer, textBuffer)
new InfoSelectQuest(".info__select", "?")
new ModalSelect(".modal__select", "status")
new HeaderSelect(".select", "Polygon")
new UsersTmpl(tmplContainer, main, usersTmpData)
new MainModal(modal, btnModal, "modal_active", btnCloseModal)
