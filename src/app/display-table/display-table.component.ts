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
  sortOption: string = 'asc';

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response: IUser[]) => {
      this.userData = response;
      this.filteredUserData = [...this.userData];
      this.sortUser();
    })
  }

  filterUser(): void {
    this.filteredUserData = this.userData.filter((item) => {
      const searchTerm = this.searchTerm.toLowerCase();
      return Object.values(item).some((value) => {
        return String(value).toLowerCase().includes(searchTerm);
      })
    })
  }

  sortUser(): void {
    this.filteredUserData.sort((a, b) => {
      const comparison = a.firstName.localeCompare(b.firstName);
      return this.sortOption === 'asc' ? comparison : -comparison;
    });
  }

  onSortChange(event: any): void {
    this.sortOption = event.target.value;
    this.sortUser();
  }
}
