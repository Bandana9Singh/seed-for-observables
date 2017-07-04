import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-connect-server',
  templateUrl: './connect-server.component.html',
  styleUrls: ['./connect-server.component.css'],
  providers : [PostService]
})
export class ConnectServerComponent implements OnInit {
  isLoading = true;

  //Injection	
  constructor(private _postService : PostService) { 
  }

  /* Interface method, called after the constructor. Constructor we do very basic and light weight initialisation */
  ngOnInit() {
   // In promise instead of subscribe we use then
  	this._postService.getPosts().then( posts => {
  		this.isLoading = false;
  		console.log(posts[0].id);
  	});
  }

}
