module Service {
    export class ProfileService {
        result: string;
        constructor(private $scope) {
            this.result = 'this should be a result';
        }
        static serviceId: string = "ProfileService";
    }
}
