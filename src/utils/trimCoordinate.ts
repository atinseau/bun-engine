
const trimCoordinate = (token: string) => {
  return token.length - token.trimStart().length
}

export default trimCoordinate;