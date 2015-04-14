module Controller {
    export class DocumentUploadCtrl {

        constructor(private $scope, private $state) {

        }

        openFileDialog() {
            console.log('openFileDialog');
        }
        
        static controllerId:string = "DocumentUploadCtrl";
    }
}
