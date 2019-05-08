describe('my own map-like methods', function() {
 describe("map returns an array with all values made negative", function() {
   it("transforms correctly", function(){
      expect(map([1, 2, 3, -9], function(a){ return -1 * a } )).to.eql([-1, -2, -3, 9])
   })

  describe("map returns an array with the original values", function() {
    it("transforms correctly", function(){
      dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
      expect(map(dune, function(a){ return a})).to.eql(dune)
    })
  })

  describe("map returns an array with the original values multiplied by 2", function() {
    it("transforms correctly", function(){
      expect(map([1, 2, 3, -9], function(a){ return 2 * a })).to.eql([2, 4, 6, -18])
    })
  })

  describe("map returns an array with the original values squared", function() {
    it("transforms correctly", function(){
      expect(map([1, 2, 3, -9], function(a){return a * a})).to.eql([1, 4, 9, 81])
    })
  })
 })
})

describe('my own reduce-like methods', function() {
  describe("reduce returns a running total when not given a starting point", function() {
    it("reduces correctly", function(){
      sourceArray = [1,2,3]
      expect(reduce(sourceArray, function(e, memo){return e + memo})).to.equal(6)
    })
  })

  describe("reduce returns a running total when given a starting point", function() {
    it("reduces correctly", function(){
      sourceArray = [1,2,3]
      startingPoint = 100
      expect(reduce(sourceArray, function(e, memo){return e + memo}, startingPoint)).to.equal(106)
    })
  })

  describe("reduce returns true when all values are true", function() {
    it("reduces correctly", function(){
      sourceArray = [1, 2, true, "razmatazz"]
      expect(reduce(sourceArray, function(a, memo){ return !!a && !!memo})).to.be.true
    })
  })

  describe("reduce returns false when any value is false", function() {
    it("reduces correctly", function(){
      sourceArray = [1, 2, true, "razmatazz", false]
      expect(reduce(sourceArray, function(a, memo){ return !!a && memo})).to.be.false
    })
  })

  describe("reduce returns true when a true value is present", function() {
    it("reduces correctly", function(){
      sourceArray = [ false, null, null, null, true]
      expect(reduce(sourceArray, function(a, memo){ return a || !!memo })).to.equal(true)
    })
  })

  describe("reduce returns false when no true value is present", function() {
    it("reduces correctly", function(){
      sourceArray = [ false, null, null, null]
      expect(reduce(sourceArray, function(a, memo){return !!a && memo})).to.equal(false)
    })
  })
})
