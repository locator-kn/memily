module Controller {
    export class ProfileCtrl {
        variable: string;
        _getter: string;
        constructor(private $scope) {
            this.variable = 'testvariable';
            this._getter = 'hallo';
        }
        get getter():string {
            return this._getter;
        }

        set getter(value: string) {
            this._getter = value + 'additional';
        }

        clear() {
            this.getter = 'asd';
        }
        
        static controllerId: string = "ProfileCtrl";
    }
}
