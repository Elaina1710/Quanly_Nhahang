import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  
  Food:any;
  listFoods:any[]=[];

  Add_Edit:boolean=false;
  ModalTitle:string="";

  FilterName:string="";
  FilterDanhMuc:string="";
  listFoodWithoutFilter:any[]=[];

  constructor(private service:ServiceService) { }
  
  ngOnInit(): void {
    this.GetListFoods();
  }
  add(){
    this.ModalTitle="Thêm món ăn";
    this.Food={
      id:0,
      ten:"",
      gia:"",
      danhmuc:"",
      hinhanh:"default.png"
    }
    this.Add_Edit=true;
  }
  close(){
    this.Add_Edit=false;
    this.GetListFoods();
  }
  edit(item:any){
    this.ModalTitle="Cập nhật món ăn";
    this.Food=item;
    this.Add_Edit=true;
  }
  delete(item:any){
    if(confirm("Bạn có chắc chắn không?")){
      this.service.DeleteFood(item.id).subscribe(data=>{
        alert(data.toString());
        this.GetListFoods();
      })
    }
  }
  //data: ket qua tra ve cua api
  GetListFoods(){
    this.service.GetAllFoods().subscribe(
      data=>{
        this.listFoods=data;
        this.listFoodWithoutFilter=data;
      });
    //this.demoList=this.service.getItem();
  }

  FilterFn(){
    var nameFilter=this.FilterName;
    var danhmucFilter=this.FilterDanhMuc;

    this.listFoods=this.listFoodWithoutFilter.filter(function(el){
      return el.ten.toString().toLowerCase().includes(
        nameFilter.toString().trim().toLowerCase()
      ) && el.danhmuc.toString().toLowerCase().includes(
        danhmucFilter.toString().trim().toLowerCase()
        )
    })
  }
}
