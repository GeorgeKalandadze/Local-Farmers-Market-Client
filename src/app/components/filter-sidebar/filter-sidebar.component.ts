import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.css',
})
export class FilterSidebarComponent {
  minPrice: number = 0;
  maxPrice: number = 5399;
  minStock: number = 0;
  maxStock: number = 100; // Assume max stock is 100 for example
  categories: string[] = ['Smartphones', 'Tablets', 'Laptops', 'Accessories'];
  selectedCategories: string[] = [];

  updatePriceRange() {
    if (this.minPrice < 0) {
      this.minPrice = 0;
    }
    if (this.maxPrice > 5399) {
      this.maxPrice = 5399;
    }
    if (this.minPrice > this.maxPrice) {
      this.maxPrice = this.minPrice;
    }
  }

  resetPrices() {
    this.minPrice = 0;
    this.maxPrice = 5399;
  }

  updateStockRange() {
    if (this.minStock < 0) {
      this.minStock = 0;
    }
    if (this.maxStock > 100) {
      this.maxStock = 100;
    }
    if (this.minStock > this.maxStock) {
      this.maxStock = this.minStock;
    }
  }

  resetStock() {
    this.minStock = 0;
    this.maxStock = 100;
  }
}
