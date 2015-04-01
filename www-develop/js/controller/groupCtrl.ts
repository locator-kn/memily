/**
 * Created by denni_000 on 01.04.2015.
 */
module Controller {
    export class GroupCtrl {
        _id:number;
        name:string;

        constructor (private $scope) {
            
        }

        static controllerId:string = "GroupCtrl";
    }
}
