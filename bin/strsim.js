#!/usr/bin/env node
"use strict";

// calculate the Levenshtein distance of strA and strB using dynamic programming method
// see spec in http://en.wikipedia.org/wiki/Levenshtein_distance
function _lev(a, b, i, j) {
    var minV = Math.min(i, j),
        maxV = Math.max(i, j),
        result = Number.MAX_VALUE;
    
    if (minV === 0) {
        return maxV;
    }
    
    result = Math.min(result, _lev(a, b, i - 1, j) + 1);
    result = Math.min(result, _lev(a, b, i, j - 1) + 1);
    result = Math.min(result, _lev(a, b, i - 1, j - 1) + (a[i - 1] === b[j - 1] ? 0 : 1));
    
    return result;    
}

function lev(a, b) {
    // ignore trail & head spaces
    var trimA = a.trim(),
        trimB = b.trim();
    
    return _lev(trimA, trimB, trimA.length, trimB.length);
}

function test(a, b) {
    var t = null,
        maxL = Math.max(a.length, b.length);
    if (a.length < b.length) {
        t = a; 
        a = b;
        b = t;
    }
    
    if (maxL === 0) {
        return 1.0; /* both strings are zero length */
    }
    
    return 1.0 * ((maxL - lev(a, b)) / maxL);
}

module.exports = {
    lev : lev,
    test : test
};