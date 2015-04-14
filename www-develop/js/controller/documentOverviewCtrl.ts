module Controller {
    export class DocumentOverviewCtrl {

        _ID: number;
        documents;

        constructor(private $scope, private $state, private $stateParams, private DocumentOverviewService) {
            this._ID = this.$stateParams.groupID;
            this.allDocuments();
        }

        allDocuments() {
            this.DocumentOverviewService.documents().then(documentsData => {
                this.documents = documentsData;
            })
        }

        docUpload() {
            this.$state.go('app.docUpload');
        }

        static controllerId:string = "DocumentOverviewCtrl";
    }
}
