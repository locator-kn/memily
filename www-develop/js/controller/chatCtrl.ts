module Controller {
    export class ChatCtrl {

        _ID:number;
        grpChat;

        constructor(private $scope, private $stateParams ,private ChatService) {
            this._ID = this.$stateParams.groupID;
            this.groupChat();
        }

        groupChat() {
            this.ChatService.groupChat(this._ID).then(result => {
                this.grpChat = result;
                console.log(this.grpChat._id);
            });
        }

        static controllerId:string = "ChatCtrl";
    }
}
