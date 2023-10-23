import { SyntaxChildren } from "../types/lexer";
import getSyntaxNode from "./getSyntaxNode";
import trimCoordinate from "./trimCoordinate";


const createSyntaxTree = (tokens: string[]) => {
  const childrens: SyntaxChildren[] = []

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    const sub_tokens: string[] = []

    let e = i + 1;
    let pos = 0;
    while (tokens[e] && trimCoordinate(token) < trimCoordinate(tokens[e])) {
      sub_tokens.push(tokens[e])
      e++;
      pos++;
    }

    i += pos;

    const node = getSyntaxNode(token)

    if (node.type === "string") {
      childrens.push(token.trim())
      continue;
    }

    childrens.push({
      ...node,
      children: [
        ...node.children || [],
        ...createSyntaxTree(sub_tokens)
      ]
    });
  }
  return childrens;
}

export default createSyntaxTree;