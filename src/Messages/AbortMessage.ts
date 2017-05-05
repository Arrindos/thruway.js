import {Message} from './Message';

export class AbortMessage extends Message {

    constructor(private _reason: string, private _details: Object = {}) {
        super(Message.MSG_ABORT);
    }

    public wampifiedMsg() {
        return [this.msgCode, this.details, this.reason];
    }

    get reason(): string {
        return this._reason;
    }

    // @todo add details interface
    get details(): any {
        return this._details;
    }
}
