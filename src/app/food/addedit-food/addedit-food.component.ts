import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-addedit-food',
  templateUrl: './addedit-food.component.html',
  styleUrls: ['./addedit-food.component.scss']
})
export class AddeditFoodComponent implements OnInit {

  @ViewChild('addeditFood')
  addeditFood!:NgForm;

  constructor(private service:ServiceService) { }

  @Input() food: any;
  id:number=0;
  tenMonAn:string="";
  giaMonAn:number=0;
  danhmuc:string="";
  tenHinhAnh:string="";
  pathHinhAnh:string="";

  ngOnInit(): void {
    this.id=this.food.id;
    this.tenMonAn=this.food.ten;
    this.giaMonAn=this.food.gia;
    this.danhmuc=this.food.danhmuc;
    this.tenHinhAnh=this.food.hinhanh;
    this.pathHinhAnh=this.service.ImageURL+this.tenHinhAnh;
  }

  addItem(){
    if(this.addeditFood.invalid){
      alert("Thông tin không hợp lệ");
      return;
    }
    var val={
      id:this.id,
      ten:this.tenMonAn,
      gia:this.giaMonAn,
      danhmuc:this.danhmuc,
      hinhanh:this.tenHinhAnh
    }

    this.service.AddFood(val).subscribe(data=>{
      alert(data.toString());
    })
  }

  updateItem(){
    if(this.addeditFood.invalid){
      alert("Thông tin không hợp lệ");
      return;
    }
    var val={
      id:this.id,
      ten:this.tenMonAn,
      gia:this.giaMonAn,
      danhmuc:this.danhmuc,
      hinhanh:this.tenHinhAnh
    }

    this.service.UpdateFood(val).subscribe(data=>{
      alert(data.toString());
    })
  }

  
  uploadImage(event:any){
    var file= event.target.files[0];
    const formData:FormData=new FormData();
    formData.append("uploadedFile",file,file.name);

    this.service.UploadImg(formData).subscribe((data:any)=>{
      this.tenHinhAnh=data.toString();
      this.pathHinhAnh=this.service.ImageURL+this.tenHinhAnh;
    })
  }
}
