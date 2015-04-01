module Service {
    export class DashboardService {

        constructor(private $q) {
        }

        getProfileData() {
            return this.$q(function (resolve, reject) {
                setTimeout(function () {

                    resolve({result: 'ok'});

                }, 500);
            });
        }

        static serviceId:string = "DashboardService";
    }
}
