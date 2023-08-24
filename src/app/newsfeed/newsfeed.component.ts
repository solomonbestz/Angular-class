import { Component } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent {
    news_message: string = 'Heyyyyy I am a message from newsfeed'
}
