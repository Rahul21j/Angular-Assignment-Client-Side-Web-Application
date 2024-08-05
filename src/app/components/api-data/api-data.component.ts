
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css'
})
export class ApiDataComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  fetchData() {
    this.apiService.getData().subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }
}
