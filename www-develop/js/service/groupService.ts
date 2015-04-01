module Service {
    export class GroupService {
        constructor (private $q) {

        }

        myGroups() {
            return this.$q(function (resolve) {
                [
                    {
                        "_id": "551bd8d98fe8ee54fe79fbe0",
                        "name": "Digitaltechnik"
                    },
                    {
                        "_id": "551bd8d96ac6271311173b03",
                        "name": "Programmiertechnik"
                    },
                    {
                        "_id": "551bd8d9c528474af52dbd7e",
                        "name": "Mathe 1"
                    }
                ]
            });
        }

        static serviceId:string = "GroupService";
    }
}
