module Service {
    export class GroupService {
        constructor(private $q) {

        }

        posts() {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {
                    resolve([
                        {
                            "_id": "551bfb6b2926b18360873cbf",
                            "date": "2014-04-23T18:25:43.511Z",
                            "title": "hey yo",
                            "author": "551bfb6bedba87b86375ad3b",
                            "content": "Cillum consectetur proident sit adipisicing ut exercitation.",
                            "comments": "[]"
                        },
                        {
                            "_id": "551bfb6b8f58d0577e3f4c1c",
                            "date": "2013-04-23T18:25:43.511Z",
                            "title": "was geht?",
                            "author": "551bfb6b171cbd94abfb16f4",
                            "content": "Ut reprehenderit ullamco ut ex laborum culpa eu.",
                            "comments": "[]"
                        },
                        {
                            "_id": "551bfb6bc62cc7df95a3a3a9",
                            "date": "2012-04-23T18:25:43.511Z",
                            "title": "huhuhuhu",
                            "author": "551bfb6b64f023b9f876cfa3",
                            "content": "Ut occaecat sit aliquip id quis magna irure dolore sint excepteur.",
                            "comments": "[]"
                        }
                    ]);
                }, 500);
            });
        }

        static serviceId:string = "GroupService";
    }
}
