const { makeHero } = require('./makeHero')
const { makeRaid } = require('./makeRaid')

makeRaid[Symbol.iterator] = () => ({
  next: () => {
    const enough = Math.random() > 0.90
    if (!enough)
      return {
        value: makeHero(),
        done: false
      }
    return { value: undefined, done: true }
    }
})

for (const hero of makeRaid) {
  console.log(hero)
}