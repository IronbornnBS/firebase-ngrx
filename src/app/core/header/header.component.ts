import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
