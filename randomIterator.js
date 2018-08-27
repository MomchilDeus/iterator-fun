let arr =  Array.from(Array(100), () => Math.floor(Math.random() * 100))

arr[Symbol.iterator] = function() {
  let temp = this.slice()
  console.log('arr is', arr)
  return {
    next: () => {
      if (temp.length == 0) return { value: undefined, done: true }
      return { value: temp.shift() * Math.floor(Math.random() * 100), done: false }      
    }
  }
}