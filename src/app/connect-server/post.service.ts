/* After the service is ready we need to inject it to the component.
   @Inject() is a manual mechanism for letting Angular know that a parameter must be injected.
   @Injectable() is not strictly required if the class has other Angular decorators on it or does not have any dependencies.(better approach)
 */

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Post } from './post';

//Decorator
@Injectable()
export class PostService {
	private _url = "https://jsonplaceholder.typicode.com/posts";
	
	constructor(private _http: Http){

	}
	
	/* GET , POST returns an observable of response, so we need to map it to JSON object.
		Communicating with server we prefer Observable to Promise.
	 */
	// Observable<Post[]> 
	getPosts() : Promise<Post[]>{
		return this._http.get(this._url).map(res=>res.json()).toPromise();
	}

	/* Second parameter is string that represents the request body */
	createPost(post: Post){
		return this._http.post(this._url, JSON.stringify(post)).map(res=>res.json());
	}

}