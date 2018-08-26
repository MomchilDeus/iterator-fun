const { makeHero } = require('./makeHero')

const makeRaid = () => {
  return Array(5).fill().map(() => makeHero())
}

exports.makeRaid = makeRaid