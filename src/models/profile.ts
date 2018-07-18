export class Profile{

	public profileImage;
	public name;
	public password;
	public location;
  public wishList;
  public ownedList;
  public consoles;
  public tradeLocations;

	constructor(
		profileImage = null
		,name = null
		,location = null
		,wishList : Array<any> = null
		,ownedList : Array<any> = null
		,consoles : Array<string> = null
		,tradeLocations : Array<any> = null
	){
		this.profileImage = profileImage;
		this.name = name;
		this.location = location;
		this.wishList = wishList;
		this.ownedList = ownedList;
		this.consoles = consoles;
		this.tradeLocations = tradeLocations;
  }
 
}	