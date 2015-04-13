module Service {
    export class LoginService {

        constructor(private $q, private $base64, private $http) {
        }

        getProfileData() {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {

                    resolve({result: 'ok'});

                }, 500);
            });
        }

        authentification (username, password) {
            var authdata = this.$base64.encode(username + ':' + password);
            this.$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            return this.$http.get('templates/dashboard.html');
        }

        static serviceId:string = "LoginService";
    }
}
