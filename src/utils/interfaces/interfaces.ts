import { TDiv, TMainTag } from "../types/types"

export interface ITemplate {
  readonly tmplContainer: TDiv,
  readonly main: TMainTag,
}

export interface ISelect {
  readonly classSelect: string
  readonly selectText: string
}