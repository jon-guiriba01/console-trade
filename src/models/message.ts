import * as firebase from 'firebase/app';

export class Message{

	text: String = "";
	sender: String = "";
	senderKey: String = "";
	createdAt: firebase.database.Database ;

	constructor(
		text
		, sender
		, senderKey
		, createdAt
		){
		this.text = text;		
		this.sender = sender;		
		this.senderKey = senderKey;		
		this.createdAt = createdAt;		
  }
 
}	