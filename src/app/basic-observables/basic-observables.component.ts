//stripped down versio of Observables is rxjs/Observable
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-basic-observables',
  templateUrl: './basic-observables.component.html',
  styleUrls: ['./basic-observables.component.css']
})
export class BasicObservablesComponent implements OnInit {

  	constructor(){
		/*If the user types too fats we will flood the spotify with request. Its better to wait a little bit before making a ajax call.
		Here we have total 3 callback functions. */
		/*  Too many callbacks...we will use Observables...
		var debounced = _.debounce(function(text){
			var url ="https://api.spotify.com/v1/search?type=artist&q=" + text;
			$.getJSON(url,function(artists){
				console.log(artists);
			});
		},400);

		$("#search").keyup(function(e){
			var text = e.target.value;
			if(text.length<3)
				return;
			debounced(text);	
		});
		*/
	}

  	ngOnInit() {
  		var keyups = Observable.fromEvent(document.getElementById("search"),"keyup")
  					.map((e:any) => e.target.value)
  					.filter(text => text.length>=3)
  					.debounceTime(400)
  					.distinctUntilChanged();
  					/*.map(searchTerm => {
  						var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
  						let jqueryXhr: JQueryXHR = $.getJSON(urlString);
                    	let promise: Promise<any> = Promise.resolve(jqueryXhr);
                    	let observable = Observable.fromPromise(promise);

  						return observable;
  					});*/

  		/* Traditional way 
  		keyups.subscribe(function(data){
  			console.log(data);
  		}); or using fat-arrow */

  		//subscribe method returns object, which we can unsubscribe, if we are no longer //interested in this observable stream.
  		var subscription = keyups.subscribe(data=>console.log(data));
  		subscription.unsubscribe();
  	} 			
}
