var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Message } from '../../models/message';
import { UserConversation } from '../../models/userConversation';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
var FirebaseappProvider = /** @class */ (function () {
    function FirebaseappProvider(http, afdb) {
        this.http = http;
        this.afdb = afdb;
    }
    FirebaseappProvider.prototype.getOfferedGames = function (userKey, conversationKey) {
        var offeredGamesRef = this.afdb
            .list("/conversations/" + conversationKey + "/deal/" + userKey + "/offer")
            .valueChanges();
        return offeredGamesRef;
    };
    FirebaseappProvider.prototype.updateUserProfileImage = function (userKey, profileImage) {
        var selectedRef = this.afdb.list("/users/" + userKey + "/")
            .set('profileImage', profileImage);
    };
    FirebaseappProvider.prototype.updateConversationOffers = function (userKey, conversationKey, selectedGames) {
        // console.log("[FBAPP] updateSelectedGames : ", selectedGames)
        var selectedRef = this.afdb.list("/conversations/" + conversationKey + "/deal/" + userKey + "/")
            .set('offer', selectedGames);
    };
    FirebaseappProvider.prototype.updateUserTradeLocations = function (userKey, trade_locations) {
        var userRef = this.afdb.list("/users/" + userKey + "/")
            .set('trade_locations', trade_locations);
    };
    FirebaseappProvider.prototype.updateUserWishList = function (user, wishList) {
        var userRef = this.afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
        var userSub = userRef.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (res) {
            // console.log("get user data", res)
            if (!res[0])
                return;
            var key = res[0]["key"];
            // console.log("adding to wishlist[" + key + "]", wishList)
            userRef.update(key, {
                wishList: wishList
            });
            userSub.unsubscribe();
        });
    };
    FirebaseappProvider.prototype.updateUserOwnedList = function (user, ownedList) {
        var userRef = this.afdb.list('/users', function (ref) { return ref.orderByChild('email').equalTo(user.email); });
        var userSub = userRef.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (res) {
            // console.log("get user data", res)
            if (!res[0])
                return;
            var key = res[0]["key"];
            // console.log("adding to owned[" + key + "]", ownedList)
            userRef.update(key, {
                ownedList: ownedList
            });
            userSub.unsubscribe();
        });
    };
    FirebaseappProvider.prototype.getConversationMessages = function (key) {
        var conversationRef = this.afdb
            .list('/conversations/' + key + "/messages/", function (ref) { return ref.limitToLast(80); })
            .valueChanges(["child_added"]);
        return conversationRef;
    };
    FirebaseappProvider.prototype.getTraderConversationKey = function (trader, user) {
        // console.log("-fbapp getTraderConversationKey: ", trader.conversations, user.conversations)
        if (!trader.conversations || !user.conversations) {
            console.log("r");
            return;
        }
        for (var u in user.conversations) {
            for (var t in trader.conversations) {
                if (trader.conversations[t].key === user.conversations[u].key)
                    return user.conversations[u].key;
            }
        }
        return null;
    };
    FirebaseappProvider.prototype.createNewThread = function (trader, user, msg) {
        // console.log("push convo " + msg, trader, user)
        var members = {};
        members[trader.key] = true;
        members[user.key] = true;
        var message = new Message(msg, user.first_name + " " + user.last_name, user.key, firebase.database.ServerValue.TIMESTAMP);
        var converRef = this.pushConversation([message], members);
        user.conversations = user.conversations ? user.conversations : [];
        var userConversation = new UserConversation(converRef.key, trader.key, trader.first_name + " " + trader.last_name);
        user.conversations[converRef.key] = userConversation;
        // console.log("uckey:", user.conversations)
        this.updateUserConversation(user.key, converRef.key, userConversation);
        trader.conversations = trader.conversations ? trader.conversations : [];
        var traderConversation = new UserConversation(converRef.key, user.key, user.first_name + " " + user.last_name, true);
        trader.conversations[converRef.key] = traderConversation;
        var traderConversationKey = this.afdb.list('/users/' + trader.key + '/conversations/').update(converRef.key, traderConversation);
        return converRef;
    };
    FirebaseappProvider.prototype.updateUserConversation = function (userKey, converKey, conversation) {
        return this.afdb
            .list('/users/' + userKey + '/conversations/')
            .update(converKey, conversation);
    };
    FirebaseappProvider.prototype.pushConversation = function (messages, members) {
        return this.afdb.list('/conversations').push({
            messages: messages,
            members: members
        });
    };
    FirebaseappProvider.prototype.updateConversation = function (key, trader, user, msg) {
        // console.log("update convo " + key)
        var message = new Message(msg, user.first_name + " " + user.last_name, user.key, firebase.database.ServerValue.TIMESTAMP);
        this.afdb.list("/conversations/" + key + "/messages").push(message);
        this.afdb.list("/users/" + trader.key + "/conversations").update(key, { "unread": true });
        // var conversationSub = this.afdb
        // .object('/conversations/' + key)
        // .snapshotChanges()
        // .subscribe((res)=>{
        // 	try{
        // 		var conversation = res.payload.val();
        // 		if(!conversation) return;
        // 		conversation["messages"] = conversation["messages"] || [];
        // 		var message = new Message(msg, user.first_name + " " + user.last_name, user.key, firebase.database.ServerValue.TIMESTAMP)
        // 		conversation["messages"].push(message)
        // 		this.afdb.list('/conversations').update(key, {
        // 			messages : conversation["messages"]
        // 		})
        // 		console.log("converRef update: " , res.payload.val())
        // 		conversationSub.unsubscribe();
        // 	}catch(err){
        // 		console.log("Error updating conversation ", err)
        // 	}
        // })
    };
    FirebaseappProvider.prototype.readConversation = function (converKey, userKey) {
        if (!converKey)
            return;
        if (!userKey)
            return;
        return this.afdb.list("/users/" + userKey + "/conversations/")
            .update(converKey, { unread: false });
    };
    FirebaseappProvider.prototype.getUserConversations = function (user, events) {
        if (events === void 0) { events = null; }
        return this.afdb
            .list('/users/' + user.key + '/conversations/')
            .snapshotChanges(events)
            .pipe(map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    FirebaseappProvider.prototype.getProfile = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscription = _this.afdb
                .object('/users/' + key)
                .snapshotChanges()
                .subscribe(function (res) {
                resolve(res.payload.val());
                subscription.unsubscribe();
            });
        });
    };
    FirebaseappProvider.prototype.updateConversationGuarantee = function (converKey, userKey) {
        var _this = this;
        console.log("converKey ", converKey);
        // var conversations = this.afdb
        // 	.list('/conversations/'+converKey+'/')
        // 	.snapshotChanges()
        // 	.pipe(
        //     	map(changes => 
        //       	changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        //     	)
        //   	)
        //   conversations.subscribe((res)=>{
        // 		console.log("test subscribe ", res)
        //     })
        return new Promise(function (resolve, reject) {
            var subscription = _this.afdb
                .object("users/" + userKey + "/conversations/" + converKey + "/")
                .snapshotChanges()
                .subscribe(function (res) {
                var conversation = res.payload.val();
                console.log("conv", conversation);
                conversation["guarantee"];
                if (conversation["guarantee"]) {
                    console.log("guarantee false");
                    _this.afdb.list("/users/" + converKey + "/conversations/")
                        .update(converKey, { guarantee: false });
                    resolve(false);
                }
                else {
                    _this.afdb.list("/users/" + converKey + "/conversations/")
                        .update(converKey, { guarantee: true });
                    resolve(true);
                }
                subscription.unsubscribe();
            });
        });
        // console.log("test ", subscription)
    };
    FirebaseappProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AngularFireDatabase])
    ], FirebaseappProvider);
    return FirebaseappProvider;
}());
export { FirebaseappProvider };
//# sourceMappingURL=firebaseapp.js.map