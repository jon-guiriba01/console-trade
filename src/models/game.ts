export class Game{

	public id : string;
	public name : string;
  public cover_url : string;
  public platforms : Array<string>;

	constructor(
		id = null
		, name = null
		,cover_url = null
		,platforms = null
	){
		this.id = id;
		this.name = name;
		this.cover_url = cover_url;
		this.platforms = platforms;
  }
 
}	