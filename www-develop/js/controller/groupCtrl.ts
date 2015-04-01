module Controller {
    export class GroupCtrl {
        myGroups;

        constructor (private $scope, private GroupService) {
            this.getMyGroups();
        }


        getMyGroups() {
            this.GroupService.myGroups().then(groupData => {
                this.myGroups = groupData;
            })
        }

        static controllerId:string = "GroupCtrl";
    }
}
