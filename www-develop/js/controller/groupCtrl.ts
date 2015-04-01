module Controller {
    export class GroupCtrl {

        constructor (private $scope, private GroupOverviewService, private $stateParams) {
            console.info(this.$stateParams);
        }

        static controllerId:string = "GroupCtrl";
    }
}
