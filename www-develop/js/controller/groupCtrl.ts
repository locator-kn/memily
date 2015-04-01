module Controller {
    export class GroupCtrl {
        registeredGroups;
        suggestedGroups;

        constructor (private $scope, private GroupService) {
            this.myRegisteredGroups();
            this.mySuggestedGroups();
        }

        myRegisteredGroups() {
            this.GroupService.myRegisteredGroups().then(registeredGroupsData => {
                this.registeredGroups = registeredGroupsData;
            })
        }

        mySuggestedGroups() {
            this.GroupService.mySuggestedGroups().then(suggestedGroupsData => {
                this.suggestedGroups = suggestedGroupsData;
            })
        }

        static controllerId:string = "GroupCtrl";
    }
}
