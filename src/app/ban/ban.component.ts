import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.scss']
})
export class BanComponent implements OnInit {
  
  table: any;
  listTables: any[] = [];

  Add_Edit: boolean = false;
  ModalTitle: string = "";

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.GetListTables();
  }
  add() {
    this.ModalTitle = "Thêm bàn";
    this.table = {
      id: 0,
      ten: "",
      trangthai: true,
    }
    this.Add_Edit = true;
  }
  close() {
    this.Add_Edit = false;
    this.GetListTables();
  }
  edit(item: any) {
    this.ModalTitle = "Cập nhật bàn";
    this.table = item;
    this.Add_Edit = true;
  }
  delete(item: any) {
    if (confirm("Bạn có chắc chắn không?")) {
      this.service.DeleteBan(item.id).subscribe(data => {
        alert(data.toString());
        this.GetListTables();
      })
    }
  }
  //data: ket qua tra ve cua api
  GetListTables() {
    this.service.GetBan().subscribe(
      data => {
        this.listTables = data;
      });
  }

  navigate(item: any) {
    this.router.navigate(['/order', item.id,item.ten]);
  }

  xemhoadon(item:any){
    this.table = item;
  }
}
