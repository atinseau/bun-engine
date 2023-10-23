import { SyntaxChildren } from "../types/lexer"
import isRegularNodeType from "./isRegularNodeType"

const getSyntaxNode = (token: string): Exclude<SyntaxChildren, string> => {
  const trimed_token = token.trim()
  const splitted_token = trimed_token.split(/\.| /g)

  const type = splitted_token.shift()

  if (type && isRegularNodeType(type)) {
    const attributes: Record<string, any> = {}
    const children: string[] = []

    const class_index = token.indexOf(splitted_token[0])
    if (class_index && token[class_index - 1] === '.') {
      attributes['class'] = splitted_token.shift()
    }

    if (splitted_token.length) {
      children.push(splitted_token.join(' '))
    }

    return {
      type,
      children,
      ...attributes
    };
  }

  return {
    type: "string",
    children: []
  }
}

export default getSyntaxNode;