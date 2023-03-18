import { ITemplate } from "../utils/interfaces/interfaces"
import { TDiv, TMainTag, TDivDen, TUserTmpData, TElement } from "../utils/types/types"

export class Template implements ITemplate {
  readonly tmplContainer: TDiv
  readonly main: TMainTag
  readonly tmplData: TUserTmpData

  constructor(tmplContainer: TDiv, main: TMainTag, tmplData: TUserTmpData) {
    this.tmplContainer = tmplContainer
    this.main = main
    this.tmplData = tmplData
  }

  public set divGenerator(className: TDivDen) {
    this.tmplContainer.classList.add(`${className}`)
  }
  
  public get divGenerator() {
    return this.main?.appendChild(this.tmplContainer)
  }

  private set checkStatusClass(tmpStatus: TElement) {
    switch (tmpStatus!.textContent) {
      case "New":
        tmpStatus?.classList.add("template-usr__status_new")
        break;
      case "In progress":
        tmpStatus?.classList.add("template-usr__status_progress")
        break;
      case "Rejected":
        tmpStatus?.classList.add("template-usr__status_rejected")
        break;
      case "Solved":
        tmpStatus?.classList.add("template-usr__status_solved")
        break;
      case "Deffered":
        tmpStatus?.classList.add("template-usr__status_deferred")
        break
      default:
        tmpStatus?.classList.add("template-usr__status")
        break;
    }
  }

  private getTemplate() {
    const tmpl = document.getElementById(`${this.tmplData.tmpClass}`) as HTMLTemplateElement
    const tmplContent = tmpl.content
    const tmplClode = tmplContent
      .querySelector(`${this.tmplData.tmpClassCont}`)
      ?.cloneNode(true) as HTMLElement

    return tmplClode 
  }

  public getTmplElements(item: TUserTmpData) {
    const tmplElem = this.getTemplate()

    if(tmplElem) {
      const tmpId = tmplElem?.querySelector(`${this.tmplData.tmplUsrId}`) 
      const tmpBug = tmplElem?.querySelector(`${this.tmplData.tmplUsrBug}`)
      const tmpApp = tmplElem?.querySelector(`${this.tmplData.tmplUsrApp}`)
      const tmpStatus = tmplElem?.querySelector(`${this.tmplData.tmplUsrStatus}`)
      const tmpData = tmplElem?.querySelector(`${this.tmplData.tmplUsrData}`)

      tmpId!.textContent = item.id
      tmpBug!.textContent = item.bug
      tmpApp!.textContent = item.app
      tmpStatus!.textContent = item.status
      tmpData!.textContent = item.createdAt

      this.checkStatusClass = tmpStatus
    }
    return tmplElem
  }
}