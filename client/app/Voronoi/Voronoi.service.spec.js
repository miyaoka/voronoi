'use strict';

describe('Service: Voronoi', function () {

  // load the service's module
  beforeEach(module('voronoiApp'));

  // instantiate service
  var Voronoi;
  beforeEach(inject(function (_Voronoi_) {
    Voronoi = _Voronoi_;
  }));

  it('should do something', function () {
    expect(!!Voronoi).toBe(true);
  });

});
