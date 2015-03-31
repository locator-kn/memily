module Service {
    export class ProfileService {
        result:string;

        constructor(private $q) {
            this.result = 'this should be a result';
        }

        getProfileData() {
            return this.$q(function(resolve, reject) {
                setTimeout(function() {

                        resolve({name: 'asd'});

                }, 1000);
            });
        }

        static serviceId:string = "ProfileService";
    }
}
