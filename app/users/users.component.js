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