module Service {
    export class DocumentOverviewService {
        constructor(private $q) {

        }

        documents() {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {
                    resolve([
                        {
                            "_id": "551bd8d98fe8ee54fe79fbe0",
                            "date": "2012-04-23T18:25:43.511Z",
                            "name": "test.pdf",
                            "uploader": "Karl Heinz",
                            "description": "test document"
                        },
                        {
                            "_id": "551bd8d98fe8ee54fe79fbe0",
                            "date": "2012-04-23T18:25:43.511Z",
                            "name": "test.pdf",
                            "uploader": "Karl Heinz",
                            "description": "test document"
                        },
                        {
                            "_id": "551bd8d98fe8ee54fe79fbe0",
                            "date": "2012-04-23T18:25:43.511Z",
                            "name": "test.pdf",
                            "uploader": "Karl Heinz",
                            "description": "test document"
                        }
                    ]);
                }, 500);
            });
        }

        static serviceId:string = "DocumentOverviewService";
    }
}
