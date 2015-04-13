module Service {
    export class ChatService {
        constructor(private $q) {

        }

        groupChat(_groupID) {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {
                    resolve(
                        {
                            "_id": "551bd8d98fe8ee54fe79fbe0",
                            "messages": [
                                {
                                    "_messageId": "akhffd7892nkhsashjdhsa",
                                    "_userId": "89898988d98fe8ee54fe7defsq",
                                    "date": "2014-04-23T18:25:43.511Z",
                                    "content": "Hello everybody!"
                                },
                                {
                                    "_messageId": "ajgjhfsfggfdfs7982asjd2",
                                    "_userId": "77798988d98fe8ee54fe7hall2",
                                    "date": "2014-04-23T18:26:00.111Z",
                                    "content": "Hello, who are you?"
                                },
                                {
                                    "_messageId": "sjk34sdfj343j6jsfjsiiiw",
                                    "_userId": "89898988d98fe8ee54fe7defsq",
                                    "date": "2014-04-23T18:26:25.467Z",
                                    "content": "I'm a student at HTWG"
                                }
                            ]
                        }
                    );
                }, 500);
            });
        }

        static serviceId:string = "ChatService";
    }
}
