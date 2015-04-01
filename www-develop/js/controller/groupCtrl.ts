module Controller {
    export class GroupCtrl {
        _id:number;
        name:string;

        constructor (private $scope, private GroupService) {
        }

        myGroups() {
            this.GroupService.myGroups().then(groupData => {
                this._id = groupData._id;
                this.name = groupData.name;
            });
        }

        static controllerId:string = "GroupCtrl";
    }
}
