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

        newGroupMessage(message:string) {
            console.log("Message '" + message + "' was send");
            //TODO: store new entry to DB (content, date, userID)
        }

        static controllerId:string = "ChatCtrl";
    }
}
