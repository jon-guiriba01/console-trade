var UserConversation = /** @class */ (function () {
    function UserConversation(key, traderKey, name, unread) {
        if (unread === void 0) { unread = false; }
        this.key = "";
        this.traderKey = "";
        this.name = "";
        this.key = key;
        this.traderKey = traderKey;
        this.name = name;
        this.unread = unread;
    }
    return UserConversation;
}());
export { UserConversation };
//# sourceMappingURL=userConversation.js.map