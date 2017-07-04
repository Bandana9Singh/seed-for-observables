import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from './user';
import { Followers } from './followers';

@Injectable()
export class GithubService{
	private _userUrl = "https://api.github.com/users/octocat";
	private _followersUrl = "https://api.github.com/users/octocat/followers";

	constructor(private _http: Http){

	}

	getUser() : Observable<User>{
		return this._http.get(this._userUrl).map(res => res.json());
	}

	getFollowers() : Observable<Followers[]>{
		return this._http.get(this._followersUrl).map(res => res.json());
	}	
}