let obj = {game: 'Overwatch', book: 'The Brain', sport: 'imagination', fascination: 'E8'}

obj[Symbol.iterator] = function() {
  let temp = Object.entries(obj)
  return {
    next: () => {
      if (temp.length == 0) return { value: undefined, done: true }
      const [itemZero, itemOne] = temp.shift()
      return { value: `Current ${itemZero} is ${itemOne}`, done: false }
    }
  }
}