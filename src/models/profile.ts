import { UserConversation } from './userConversation';


export class Profile{

	public profileImage = "";
	public first_name = "";
	public last_name = "";
	public email = "";
	public key = "";
  public wishList = [];
  public ownedList= [];
  public consoles = [];
  public trade_locations: Array<any> = [];
  public last_location = {};
  public conversations : Array<UserConversation>;
  public gender = "m";
	constructor(){
  }

  addToWishList(game){
    if(this.wishList.length > 8) return;
    this.wishList.push(game)
  }
  addToOwnedList(game){
    if(this.ownedList.length > 8) return;
    this.ownedList.push(game)
  }
 
}	