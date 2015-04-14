module Controller {
    export class DocumentOverviewCtrl {
        documents;

        constructor(private $scope, private $state, private DocumentOverviewService) {
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
