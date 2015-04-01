module Service {
    export class GroupService {
        constructor (private $q) {

        }

        myGroups() {
            return this.$q(function (resolve) {
                _id:12333,
                name:'Test';
            });
        }

        static serviceId:string = "GroupService";
    }
}
