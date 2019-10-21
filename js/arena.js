export default class Arena {
    constructor (name) {
      this.gladiators = []
      this.name = name.charAt(0).toUpperCase() + name.slice(1)
     
    }
  
    addGladiator(gladiator) {
      if (this.gladiators.length < 2) {
        this.gladiators.push(gladiator)
      } else {
        console.log('there are more than 2  gladiators')
      }
    }
  
    fight () {
      let w1 = this.gladiators[0].weapon
      let w2 = this.gladiators[1].weapon
  
      if (w1 === w2) {
        console.log('elimination')
        this.gladiators.splice(0,2)
      }
  
      if (w1 === 'Trident' && w2 === 'Spear') {
        console.log('Trident ')
        this.gladiators.splice(1,1)
      }
  
      if (w1 === 'Trident' && w2 === 'Club') {
        console.log('Club is winning ')
        this.gladiators.splice(0,1)
      }
  
      if (w1 === 'Spear' && w2 === 'Club') {
        console.log('Spear is winning ')
        this.gladiators.splice(1,1)
      }
  
      if (w1 === 'Spear' && w2 === 'Trident') {
        console.log('Trident is winning ')
        this.gladiators.splice(0,1)
      }
  
      if (w1 === 'Club' && w2 === 'Trident') {
        console.log('Club is winning ')
        this.gladiators.splice(1,1)
      }
  
      if (w1 === 'Club' && w2 === 'Spear') {
        console.log('Spear is winning ')
        this.gladiators.splice(0,1)
      }
    }
  }
  
  
  let colosseum = new Arena('Colosseum')
