import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibraryComponent } from './components/library/library.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'library-grid';
}
