const randomNumber = require('random-number')
const { availableClasses } = require('./availableClasses')

const makeHero = () => {
  const classes = ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior', 'Death Knight', 'Monk', 'Demon Hunter']
  const races = ['Human', 'Dwarf', 'Night elf', 'Gnome', 'Draenei', 'Worgen', 'Void elf', 'Lightforged', 'Dark Iron', 'Kul Tiran', 'Pandaren']
  
  const chosenRace = races[randomNumber({
    min: 0,
    max: races.length - 1,
    integer: true
  })]

  const chosenClass = availableClasses[chosenRace][randomNumber({
    min: 0,
    max: availableClasses[chosenRace].length - 1,
    integer: true
  })]
  return chosenRace + ' ' + chosenClass
}

exports.makeHero = makeHero