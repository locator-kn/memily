module Service {
    export class LoginService {

        constructor(private $q) {
        }

        getProfileData() {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {

                    resolve({result: 'ok'});

                }, 500);
            });
        }

        static serviceId:string = "LoginService";
    }
}
