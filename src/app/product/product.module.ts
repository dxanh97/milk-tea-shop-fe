import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductVariantComponent } from './components/product-variant/product-variant.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SweetAlert2Module,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ProductHomeComponent, 
    ProductAddComponent, 
    ProductSearchComponent, 
    ProductEditComponent, 
    ProductItemComponent, 
    ProductVariantComponent
  ],
  providers: [
    ProductService
  ],
  entryComponents: [
    ProductAddComponent,
    ProductEditComponent,
    ProductVariantComponent
  ]
})
export class ProductModule { }
