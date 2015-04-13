module Controller {
    export class ChatCtrl {

        _ID:number;

        constructor(private $scope, private $stateParams ,private ChatService) {
            this._ID = this.$stateParams.groupID;
        }

        groupChat() {
            this.ChatService.groupChat(this._ID).then(result => {
                        
            });
        }

        static controllerId:string = "ChatCtrl";
    }
}
