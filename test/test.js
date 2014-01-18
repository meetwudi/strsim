"use strict";
var strsim = require('../bin/strsim'),
    should = require('should');

describe('Levenshtein distance calculation', function() {
    it('should give correct Lev distance between two strings', function(done) {
        strsim.lev('Hey.', 'Hay.').should.equal(1);
        strsim.lev('Hey!', ' Hay.').should.equal(2);
        strsim.lev('测试看看中文比较 ', '测试中文比较').should.equal(2);
        strsim.lev('', ' ').should.equal(0);
        
        done();
    });
});

describe('calculate similarity', function() {
    it('should give a valid similarity between two strings', function(done) {
        strsim.test('hey', 'hey').should.equal(1);
        // TODO : FINISH TEST CASES
        
        done();
    });
});