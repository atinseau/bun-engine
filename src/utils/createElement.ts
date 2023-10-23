import { SyntaxChildren } from "../types/lexer"
import isRegularNodeType from "./isRegularNodeType"

const createElement = (node: SyntaxChildren): string => {
  if (typeof node === "string") {
    return node
  } else if (isRegularNodeType(node.type)) {
    const childrens = node.children.map(createElement)

    let attributes = ""

    if (node.class) {
      attributes += `class="${node.class}"`
    }

    return `<${node.type}${attributes.length ? ` ${attributes}` : ""}>${childrens.join('')}</${node.type}>`
  }
  return ""
}

export default createElement;