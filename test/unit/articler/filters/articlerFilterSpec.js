'use strict';

describe('articler', function() {

  beforeEach(module('articler'));

  it('should add the expected article', inject(function(articlerFilter) {
    expect(articlerFilter("car")).to.eq("a car");
    expect(articlerFilter("human")).to.eq("a human");
    expect(articlerFilter("american")).to.eq("an american");
  }));

  it('should add the expected article with uppercase', inject(function(articlerFilter) {
    expect(articlerFilter("car", true)).to.eq("A car");
    expect(articlerFilter("human", true)).to.eq("A human");
    expect(articlerFilter("american", true)).to.eq("An american");
  }));
});
