var Profile = /** @class */ (function () {
    function Profile() {
        this.profileImage = "";
        this.first_name = "";
        this.last_name = "";
        this.email = "";
        this.key = "";
        this.wishList = [];
        this.ownedList = [];
        this.consoles = [];
        this.trade_locations = [];
        this.last_location = {};
        this.gender = "m";
    }
    Profile.prototype.addToWishList = function (game) {
        if (this.wishList.length > 8)
            return;
        this.wishList.push(game);
    };
    Profile.prototype.addToOwnedList = function (game) {
        if (this.ownedList.length > 8)
            return;
        this.ownedList.push(game);
    };
    return Profile;
}());
export { Profile };
//# sourceMappingURL=profile.js.map