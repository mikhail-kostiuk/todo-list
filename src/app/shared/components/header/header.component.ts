import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentification/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.signOut();
  }
}
