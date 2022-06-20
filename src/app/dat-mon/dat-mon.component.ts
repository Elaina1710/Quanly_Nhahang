
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dat-mon',
  templateUrl: './dat-mon.component.html',
  styleUrls: ['./dat-mon.component.scss']
})
export class DatMonComponent implements OnInit {

  @Input() idBan: any;
  @Input() tenBan: any;

  tongtien: number = 0;
  FilterName: string = "";
  soluong: number[] = [];

  listFoodWithoutFilter: any[] = [];
  listFoods: any[] = []
  listOrder: any[] = [];

  pathHinhAnh: string[] = [];

  constructor(private service: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idBan = this.activatedRoute.snapshot.params['id'];
    this.tenBan = this.activatedRoute.snapshot.params['ten'];
    this.GetListFoods();
  }
  GetListFoods() {
    this.service.GetAllFoods().subscribe(
      data => {
        this.listFoodWithoutFilter = data;
        this.listFoods = data;
        this.listFoods.forEach(o => {
          this.pathHinhAnh[o.id] = this.service.ImageURL + o.hinhanh;
        })
      });
  }

  datmon(item: any) {

    var sl = Math.round(this.soluong[item.id]);
    var obj = this.listOrder.find(o => o.ten == item.ten);

    if (obj == null) {
      obj = {
        ten: item.ten,
        soluong: sl,
        gia: item.gia * sl
      }
      this.listOrder.push(obj);
    } else {
      obj.soluong = sl;
      obj.gia = obj.soluong * item.gia;
    }
    this.tinhtien();
  }

  Filter() {
    var nameFilter = this.FilterName;

    this.listFoods = this.listFoodWithoutFilter.filter(function (el) {
      return el.ten.toString().toLowerCase().includes(
        nameFilter.toString().trim().toLowerCase()
      )
    })
  }
  //thêm api
  hoantat() {
    var lst = this.listOrder.map(e => e.soluong + "* " + e.ten).join("; ");
    var ngayGhi = new Date();
    // alert(ngayGhi)
    var newHD = {
      id: 0,
      idBan: this.idBan,
      listFood: lst,
      tongtien: this.tongtien,
      ngayghi: ngayGhi,
      note: false
    }
    var ban = {
      id: this.idBan,
      ten: this.tenBan,
      trangthai: true
    }
    this.service.AddHoaDon(newHD).subscribe(data => {
      alert("Xong");
      this.service.UpdateBan(ban).subscribe()
      this.router.navigate(['/table']);
    })
  }

  delete(key: any) {
    this.listOrder.forEach((value, index) => {
      if (value.ten == key)
        this.listOrder.splice(index, 1);
    });
    this.tinhtien();
  }
  tinhtien() {
    this.tongtien = 0;
    this.listOrder.forEach(e => {
      this.tongtien += e.gia;
    })
  }
}
