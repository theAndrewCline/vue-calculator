export function math(event) {
  let newEquation
  const operator = event.target.innerHTML

  if (newEquation === '') {
    newEquation = `${this.value} ${operator}`
  } else {
    newEquation = `${this.equation} ${this.value} ${operator}`
  }
  this.value = 0
  this.equation = newEquation
}

export default math