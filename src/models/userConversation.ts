export class UserConversation{

  public key = "";
  public traderKey = "";
  public name = "";
  public unread;

	constructor(key, traderKey, name, unread = false){
		this.key = key;
		this.traderKey = traderKey;
		this.name = name;
		this.unread = unread;
  }
 
}	