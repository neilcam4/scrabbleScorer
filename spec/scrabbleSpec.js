describe('SCRABBLE', function(){
    it('describes returning 0 from empty string', function(){
        var string = ''
        var result = scrabbleScore(string)
        expect(result).toEqual(0)
    })
    it('describes returning 0 when nil is entered', function(){
        var string = null
        var result = scrabbleScore(string)
        expect(result).toEqual(0)
    })
    it('describes returning 0 when string is  \t\n', function(){
        var string = " \t\n"
        var result = scrabbleScore(string)
        expect(result).toEqual(0)
    })
    it('returns 1 when a is the string', function(){
        var string ='a'
        var result = scrabbleScore(string)
        expect(result).toEqual(1)
    })
    it('returns 4 when f is the string', function(){
        var string ='f'
        var result = scrabbleScore(string)
        expect(result).toEqual(4)
    })
    it('returns 6 when string is street', function(){
        var string = 'street'
        var result = scrabbleScore(string)
        expect(result).toEqual(6)
    })
    it('returns 22 when string is quirky', function(){
        var string = 'quirky'
        var result= scrabbleScore(string)
        expect(result).toEqual(22)
    })
    it('returns 41 when string is OXYPHENBUTAZONE ', function(){
        var string ='OXYPHENBUTAZONE'
        var result = scrabbleScore(string)
        expect(result).toEqual(41)
    })
})

// scrabble = Scrabble.new('')
// scrabble.score # => 0

// scrabble = Scrabble.new(" \t\n")
// scrabble.score # => 0

// scrabble = Scrabble.new(nil)
// scrabble.score # => 0

// scrabble = Scrabble.new('a')
// scrabble.score # => 1

// scrabble = Scrabble.new('f')
// scrabble.score # => 4

// scrabble = Scrabble.new('street')
// scrabble.score # => 6

// scrabble = Scrabble.new('quirky')
// scrabble.score # => 22

// scrabble = Scrabble.new('OXYPHENBUTAZONE')
// scrabble.score # => 41

