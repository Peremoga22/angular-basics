import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'angular-basics';
}
