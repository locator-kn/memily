module Service {
    export class GroupService {
        constructor(private $q) {

        }

        myRegisteredGroups() {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {
                    resolve([
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
                    ]);
                }, 500);
            });
        }

        mySuggestedGroups () {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {
                    resolve([
                        {
                            "_id": "551bd8d98fe8ee54fe89fbe0",
                            "name": "Mathe 2"
                        },
                        {
                            "_id": "551bd8d96ac6271312173b03",
                            "name": "Datenbanksysteme"
                        },
                        {
                            "_id": "551bd8d9c524474af52dbd7e",
                            "name": "Betriebssysteme"
                        }
                    ]);
                }, 500);
            });
        }

        static serviceId:string = "GroupService";
    }
}
