import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css'],
  providers: [GithubService]
})
export class GithubUserComponent implements OnInit {
  isLoading = true;	
  followers = [];
  user;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this._githubService.getUser().subscribe(user => {
    	this.user = user;
    	console.log(user);
    });
  	this._githubService.getFollowers().subscribe(followers => {
  		this.isLoading = false;
  		this.followers = followers;
  		console.log(followers);
  	}); 
  }
}
