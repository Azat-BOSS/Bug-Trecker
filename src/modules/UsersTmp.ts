import { Template } from "./Template"
import { usersBugData } from "../utils/data/data"
import { TDiv, TMainTag, TUserTmpData } from "../utils/types/types"
import { tmplContainer } from "../utils/constants/constants"

export class UsersTmpl extends Template {
  constructor(tmplContainer: TDiv, main: TMainTag, tmplData: TUserTmpData) {
    super(tmplContainer, main, tmplData)
    super.divGenerator = "user__container"
    super.divGenerator

    this.renderTmpData()
  }

  private renderTmpData() {
    usersBugData.forEach((item: TUserTmpData) => {
      const userCard = super.getTmplElements(item)
      return tmplContainer.append(userCard)
    })
  }
}



