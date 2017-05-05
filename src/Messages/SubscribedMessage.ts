import {Message} from './Message';
import {IRequestMessage} from './IRequestMessage';

export class SubscribedMessage extends Message implements IRequestMessage {

    constructor(private _requestId: number, private _subscriptionId: number) {
        super(Message.MSG_SUBSCRIBE);
    }

    public wampifiedMsg() {
        return [this.msgCode, this._requestId, this._subscriptionId];
    }

    get requestId(): number {
        return this._requestId;
    }

    get subscriptionId(): number {
        return this._subscriptionId;
    }
}
