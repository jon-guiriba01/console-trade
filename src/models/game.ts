export class Game{

	public name : string;
  public cover_url : string;
  public platforms : Array<string>;

	constructor(
		name = null
		,cover_url = null
		,platforms = null
	){
		this.name = name;
		this.cover_url = cover_url;
		this.platforms = platforms;
  }
 
}	