import {
  addition
} from './../src/pig.js'
import {
  Player
} from './../src/pig.js'


describe('addition', function() {
  it('expect fail/should test whether the total is not equal to 8', function() {
    var a = 3
    var b = 5

    expect(addition(a, b)).not.toEqual(8)
  })

  it('expect pass/should test whether the is equal to 8', function() {
    var a = 3
    var b = 5
    expect(addition(a, b)).toEqual(8)
  })
  it('expect pass/should test whether the totla is not equal to 10', function() {
    var a = 3
    var b = 5
    expect(addition(a, b)).not.toEqual(10)
  })


})

describe('Player', function() {
  it('expect pass/should test whether the initial turnscore is 0', function() {
    var player1 = new Player();
    expect(player1.turnScore).toEqual(0)
  })

  it('expect pass/should test whether the initial totalScore is 0', function() {
    var player1 = new Player();
    console.log(player1);
    expect(player1.totalScore).toEqual(0)
  })

  it('expect pass/should test calculateScore', function() {
    var player1 = new Player();
    player1.turnScore = 5;
    console.log(player1);
    player1.calculateTotal();
    expect(player1.totalScore).toEqual(5)
  })

})
