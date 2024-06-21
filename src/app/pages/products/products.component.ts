import { Component, Input, OnInit } from '@angular/core';
import { FilterSidebarComponent } from '../../components/filter-sidebar/filter-sidebar.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgClass, NgStyle } from '@angular/common';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FilterSidebarComponent, ProductCardComponent, PaginationComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() totalPages: number = 10;
  currentPage: number = 1;
  pages: number[] = [];

  ngOnInit() {
    this.updatePages();
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePages();
  }

  updatePages() {
    this.pages = [];

    if (this.totalPages <= 10) {
      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i);
      }
    } else {
      if (this.currentPage <= 6) {
        for (let i = 1; i <= 9; i++) {
          this.pages.push(i);
        }
        this.pages.push(this.totalPages);
      } else if (this.currentPage > this.totalPages - 6) {
        this.pages.push(1);
        for (let i = this.totalPages - 8; i <= this.totalPages; i++) {
          this.pages.push(i);
        }
      } else {
        this.pages.push(1);
        this.pages.push(this.currentPage - 1);
        this.pages.push(this.currentPage);
        this.pages.push(this.currentPage + 1);
        this.pages.push(this.totalPages);
      }
    }
  }
}
