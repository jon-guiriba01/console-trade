import { UserConversation } from './userConversation';


export class Profile{

	public profileImage = "";
	public name = "";
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

	constructor(){
  }
 
}	