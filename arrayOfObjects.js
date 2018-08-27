let obj = [{firstName: 'Rick', lastName: 'Sanchez'}, {firstName: 'Bojack', lastName: 'Horseman'}, {firstName: 'Wade', lastName: 'Wilson'}]

obj[Symbol.iterator] = function() {
  let temp = this.slice()
  return {
    next: () => {
      if (temp.length == 0) return { value: undefined, done: true }
      const { firstName, lastName } = temp.shift()
      return { value: firstName + ' ' + lastName, done: false }
    }
  }
}