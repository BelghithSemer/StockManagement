import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  GetAllCategorys(){
    return this.http.get<Category[]>('http://localhost:8081/category/show');
  }

  AddCategory(c: Category){
    return this.http.post<Category>('http://localhost:8081/category/create', c);
  }

  UpdateCat(c: Category){
    return this.http.put<Category>('http://localhost:8081/category/update',c)
  }

  DeleteCat(id:number){
    return this.http.delete<string>('http://localhost:8081/category/'+id);
  }

  GetAllProducts(){
    return this.http.get<Product[]>('http://localhost:8081/api/products');
  }

  AddProduct(product: Product){
    return this.http.post<Product>('http://localhost:8081/api/products',product);
  }

  updateProduct(product : Product){
    return this.http.put<Product>('http://localhost:8081/api/products/'+product.id,product);
  }


}