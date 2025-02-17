import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, IUser } from '../service/user.service';

@Component({
  selector: 'app-display-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './display-table.component.html',
  styleUrl: './display-table.component.scss'
})
export class DisplayTableComponent implements OnInit {
  userData: IUser[] = [];
  filteredUserData: IUser[] = [];
  searchTerm: string = '';

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response: IUser[]) => {
      this.userData = response;
      this.filteredUserData = [...this.userData];
    })
  }

  filterUser(): void {
    this.filteredUserData = this.userData.filter((item) => {
      const searchTerm = this.searchTerm.toLowerCase();
      return item.name.toLowerCase().includes(searchTerm);
    })
  }

  onSortChange(event: any): void {
    const sortOption = event.target.value;
    this.filteredUserData.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOption === 'up' ? comparison : -comparison;
    });
  }
}
