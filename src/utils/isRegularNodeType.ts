
const isRegularNodeType = (type: string) => {
  return type === "p" || type === "h1" || type === "div"
}

export default isRegularNodeType;