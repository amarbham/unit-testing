(function() {
  'use strict';
  // accordion-panel controller

// Register the accordion-panel component
  angular.module('app').component('accordionPanel', {
    transclude: true,
    // require the parent component, in this case accordion component
    require: {
      'parent': '^accordion'
    },
    // specify attribute binding
    // https://docs.angularjs.org/api/ng/service/$compile#-scope-
    bindings: {
      heading: '@'
    },
    // Accordion-panel template
    template: `
      <div class="panel panel-default">
        <div class="panel-heading" ng-click="$ctrl.select()">
          <h3 class="panel-title">{{$ctrl.heading}}</h3>
        </div>
        <div class="panel-body" ng-transclude ng-if="$ctrl.selected">
        </div>
      </div>
     `,
    controller: AccordionPanelController,
  });
  function AccordionPanelController() {
    var self = this;
    // register the panel in init

    /*
    $onInit() Called on each controller after all the controllers 
    on an element have been constructed and had their bindings
    initialized. This is a good place to put initialization
    code for your controller.

    */
    self.$onInit = function () {
      self.parent.addPanel(self);
    };
    // Turns on the panel by changing selected to true
    self.turnOn = function () {
      self.selected = true;
    };
    // Turns off the panel by changing selected to false
    self.turnOff = function () {
      self.selected = false;
    };
    // Selects a the current selected panel
    self.select = function () {
      self.parent.selectPanel(self);
    };

    /*
    $onChanges() Called whenever one-way bindings are updated. 
        The changesObj is a hash whose keys are the names of the 
        bound properties that have changed, and the values
        are an object of the form 
        { currentValue, previousValue, isFirstChange() }

    $onDestroy() Called on a controller when its containing scope is destroyed.
        Use this hook for releasing external resources, 
        watches and event handlers.

    $postLink() Called after this controller’s 
        element and its children have been linked. 
        This hook can be considered analogous to the ngAfterViewInit 
        and ngAfterContentInit hooks in Angular 2.

    */
  }
})();