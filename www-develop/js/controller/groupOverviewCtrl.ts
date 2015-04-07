module Controller {
    export class GroupOverviewCtrl {
        groups;
        suggestedGroups;

        constructor(private $scope, private GroupOverviewService, private $state) {
            this.myGroups();
            this.mySuggestedGroups();
        }

        myGroups() {
            this.GroupOverviewService.myGroups().then(registeredGroupsData => {
                this.groups = registeredGroupsData;
            })
        }

        mySuggestedGroups() {
            this.GroupOverviewService.mySuggestedGroups().then(suggestedGroupsData => {
                this.suggestedGroups = suggestedGroupsData;
            })
        }

        static controllerId:string = "GroupOverviewCtrl";
    }
}
