module Controller {
    export class GroupOverviewCtrl {
        registeredGroups;
        suggestedGroups;

        constructor(private $scope, private GroupOverviewService, private $state) {
            this.myRegisteredGroups();
            this.mySuggestedGroups();
        }

        myRegisteredGroups() {
            this.GroupOverviewService.myRegisteredGroups().then(registeredGroupsData => {
                this.registeredGroups = registeredGroupsData;
            })
        }

        mySuggestedGroups() {
            this.GroupOverviewService.mySuggestedGroups().then(suggestedGroupsData => {
                this.suggestedGroups = suggestedGroupsData;
            })
        }

        openGrp(_id) {
            /*
             this is necessary to prevent the ui router from popping up a new view
             with back button to previous view
             */

            this.$state.go('app.group', {
                groupID: _id
            });


        }

        static controllerId:string = "GroupOverviewCtrl";
    }
}
