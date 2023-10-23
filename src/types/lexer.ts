
type SyntaxChildren = {
  type: string
  children: SyntaxChildren[]
  class?: string
} | string

export type {
  SyntaxChildren
}