'use strict';

angular.module('voronoiApp')
  .controller('MainCtrl', function ($scope, Voronoi) {

    this.numSites = 100;
    this.addSites = 10;

    Voronoi.canvas = document.getElementById('voronoiCanvas');
    Voronoi.margin = 0.0;

    this.add = function(){
      this.numSites += this.addSites;
      Voronoi.randomSites(this.addSites, false);
      Voronoi.render();
    };
    this.gen = function(){
      Voronoi.randomSites(this.numSites, true);
      Voronoi.render();
    };
    this.clear = function(){
      Voronoi.clearSites();
      this.numSites = 0;
      Voronoi.render();
    };

    this.recompute = function(){

    };
    this.cellUnderMouse = function(evt){
//      Voronoi.cellUnderMouse(evt);
    };

    this.gen();

  });