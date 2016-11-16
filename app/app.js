(function () {
    'use strict';
    angular.module('app', ['ngStorage'])
}());

(function() {
  'use strict'

// Register the component to the app
  angular.module('app').component('accordion', {
    transclude: true,
    template:'<div class="panel-group" ng-transclude></div>',
    controller: AccordionController
  });

  // Accordion controler
  function AccordionController () {
    var self = this;
    var panels = [];
    // here we take the panel and add to our list of panels
    // to preselect the first panel we call turnOn function on the first panel
    self.addPanel = function (panel) {
      panels.push(panel);
      if (panels.length > 0) {
        panels[0].turnOn();
      }
    };
    // when a panel is selected we would want to open the contets
    // here we take the panel find it in our array and turn if on if not selected
    // and off it it is.
    self.selectPanel = function (panel) {
      for (var i in panels) {
        if (panel === panels[i]) {
          panels[i].turnOn();
        } else {
          panels[i].turnOff();
        }
      }
    };
  }

})();
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
  }
})();
(function () {

    angular.module('app')
        .component('usersInfo', {
            bindings: {
                caption: '<',
            },
            templateUrl: 'users/users.template.html',
            controller: usersInfo
        })

    function usersInfo() {
        this.records = [{
            name: "Alfreds Futterkiste",
            city: "Berlin",
            Country: "Germany"
        }, {
            name: "Ana Trujillo Emparedados y helados",
            city: "México D.F.",
            country: "Mexico"
        }, {
            name: "Blondel père et fils",
            city: "Strasbourg",
            country: "France"
        }, {
            name: "Bólido Comidas preparadas",
            city: "Madrid",
            country: "Spain"
        }];

        console.log(this)
    }
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudC5qcyIsImFjY29yZGlhbi9hY2NvcmRpYW4ucGFuZWwuY29tcG9uZW50LmpzIiwidXNlcnMvdXNlcnMuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1N0b3JhZ2UnXSlcclxufSgpKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0J1xyXG5cclxuLy8gUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCB0byB0aGUgYXBwXHJcbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbXBvbmVudCgnYWNjb3JkaW9uJywge1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgIHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwicGFuZWwtZ3JvdXBcIiBuZy10cmFuc2NsdWRlPjwvZGl2PicsXHJcbiAgICBjb250cm9sbGVyOiBBY2NvcmRpb25Db250cm9sbGVyXHJcbiAgfSk7XHJcblxyXG4gIC8vIEFjY29yZGlvbiBjb250cm9sZXJcclxuICBmdW5jdGlvbiBBY2NvcmRpb25Db250cm9sbGVyICgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBwYW5lbHMgPSBbXTtcclxuICAgIC8vIGhlcmUgd2UgdGFrZSB0aGUgcGFuZWwgYW5kIGFkZCB0byBvdXIgbGlzdCBvZiBwYW5lbHNcclxuICAgIC8vIHRvIHByZXNlbGVjdCB0aGUgZmlyc3QgcGFuZWwgd2UgY2FsbCB0dXJuT24gZnVuY3Rpb24gb24gdGhlIGZpcnN0IHBhbmVsXHJcbiAgICBzZWxmLmFkZFBhbmVsID0gZnVuY3Rpb24gKHBhbmVsKSB7XHJcbiAgICAgIHBhbmVscy5wdXNoKHBhbmVsKTtcclxuICAgICAgaWYgKHBhbmVscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcGFuZWxzWzBdLnR1cm5PbigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gd2hlbiBhIHBhbmVsIGlzIHNlbGVjdGVkIHdlIHdvdWxkIHdhbnQgdG8gb3BlbiB0aGUgY29udGV0c1xyXG4gICAgLy8gaGVyZSB3ZSB0YWtlIHRoZSBwYW5lbCBmaW5kIGl0IGluIG91ciBhcnJheSBhbmQgdHVybiBpZiBvbiBpZiBub3Qgc2VsZWN0ZWRcclxuICAgIC8vIGFuZCBvZmYgaXQgaXQgaXMuXHJcbiAgICBzZWxmLnNlbGVjdFBhbmVsID0gZnVuY3Rpb24gKHBhbmVsKSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gcGFuZWxzKSB7XHJcbiAgICAgICAgaWYgKHBhbmVsID09PSBwYW5lbHNbaV0pIHtcclxuICAgICAgICAgIHBhbmVsc1tpXS50dXJuT24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFuZWxzW2ldLnR1cm5PZmYoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIC8vIGFjY29yZGlvbi1wYW5lbCBjb250cm9sbGVyXHJcblxyXG4vLyBSZWdpc3RlciB0aGUgYWNjb3JkaW9uLXBhbmVsIGNvbXBvbmVudFxyXG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb21wb25lbnQoJ2FjY29yZGlvblBhbmVsJywge1xyXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgIC8vIHJlcXVpcmUgdGhlIHBhcmVudCBjb21wb25lbnQsIGluIHRoaXMgY2FzZSBhY2NvcmRpb24gY29tcG9uZW50XHJcbiAgICByZXF1aXJlOiB7XHJcbiAgICAgICdwYXJlbnQnOiAnXmFjY29yZGlvbidcclxuICAgIH0sXHJcbiAgICAvLyBzcGVjaWZ5IGF0dHJpYnV0ZSBiaW5kaW5nXHJcbiAgICAvLyBodHRwczovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmcvc2VydmljZS8kY29tcGlsZSMtc2NvcGUtXHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICBoZWFkaW5nOiAnQCdcclxuICAgIH0sXHJcbiAgICAvLyBBY2NvcmRpb24tcGFuZWwgdGVtcGxhdGVcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIiBuZy1jbGljaz1cIiRjdHJsLnNlbGVjdCgpXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJwYW5lbC10aXRsZVwiPnt7JGN0cmwuaGVhZGluZ319PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiIG5nLXRyYW5zY2x1ZGUgbmctaWY9XCIkY3RybC5zZWxlY3RlZFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICBgLFxyXG4gICAgY29udHJvbGxlcjogQWNjb3JkaW9uUGFuZWxDb250cm9sbGVyLFxyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIEFjY29yZGlvblBhbmVsQ29udHJvbGxlcigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vIHJlZ2lzdGVyIHRoZSBwYW5lbCBpbiBpbml0XHJcbiAgICBzZWxmLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYucGFyZW50LmFkZFBhbmVsKHNlbGYpO1xyXG4gICAgfTtcclxuICAgIC8vIFR1cm5zIG9uIHRoZSBwYW5lbCBieSBjaGFuZ2luZyBzZWxlY3RlZCB0byB0cnVlXHJcbiAgICBzZWxmLnR1cm5PbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2VsZi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgLy8gVHVybnMgb2ZmIHRoZSBwYW5lbCBieSBjaGFuZ2luZyBzZWxlY3RlZCB0byBmYWxzZVxyXG4gICAgc2VsZi50dXJuT2ZmID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZWxmLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLy8gU2VsZWN0cyBhIHRoZSBjdXJyZW50IHNlbGVjdGVkIHBhbmVsXHJcbiAgICBzZWxmLnNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2VsZi5wYXJlbnQuc2VsZWN0UGFuZWwoc2VsZik7XHJcbiAgICB9O1xyXG4gIH1cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5jb21wb25lbnQoJ3VzZXJzSW5mbycsIHtcclxuICAgICAgICAgICAgYmluZGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGNhcHRpb246ICc8JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd1c2Vycy91c2Vycy50ZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogdXNlcnNJbmZvXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiB1c2Vyc0luZm8oKSB7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRzID0gW3tcclxuICAgICAgICAgICAgbmFtZTogXCJBbGZyZWRzIEZ1dHRlcmtpc3RlXCIsXHJcbiAgICAgICAgICAgIGNpdHk6IFwiQmVybGluXCIsXHJcbiAgICAgICAgICAgIENvdW50cnk6IFwiR2VybWFueVwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFuYSBUcnVqaWxsbyBFbXBhcmVkYWRvcyB5IGhlbGFkb3NcIixcclxuICAgICAgICAgICAgY2l0eTogXCJNw6l4aWNvIEQuRi5cIixcclxuICAgICAgICAgICAgY291bnRyeTogXCJNZXhpY29cIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbmFtZTogXCJCbG9uZGVsIHDDqHJlIGV0IGZpbHNcIixcclxuICAgICAgICAgICAgY2l0eTogXCJTdHJhc2JvdXJnXCIsXHJcbiAgICAgICAgICAgIGNvdW50cnk6IFwiRnJhbmNlXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQsOzbGlkbyBDb21pZGFzIHByZXBhcmFkYXNcIixcclxuICAgICAgICAgICAgY2l0eTogXCJNYWRyaWRcIixcclxuICAgICAgICAgICAgY291bnRyeTogXCJTcGFpblwiXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICB9XHJcbn0oKSk7Il19
