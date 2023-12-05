import { SyntaxChildren } from "./types/lexer"
import createElement from "./utils/createElement"
import createSyntaxTree from "./utils/createSyntaxTree"

class Lexer {

  private tokens: string[] = []
  private template: string
  private tree: SyntaxChildren[] = []

  constructor(template: string) {
    this.template = template
    this.tokenize()
    this.parse()
  }

  private tokenize() {
    this.tokens = this.template.split('\n').filter((line) => line.length)
  }

  private parse() {
    this.tree = createSyntaxTree(this.tokens)
  }

  // public render() {
  //   let html = ""
  //   for (const node of this.tree) {
  //     html += createElement(node)
  //   }
  //   return html
  // }
}

export default Lexer;