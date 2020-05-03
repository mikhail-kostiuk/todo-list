import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import User from '../../interfaces/User';

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
