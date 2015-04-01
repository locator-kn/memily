module Controller {
    export class GroupCtrl {
        _id:number;
        name:string;

        constructor (private $scope) {

        }

        static controllerId:string = "GroupCtrl";
    }
}
