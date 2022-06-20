import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-addedit-ban',
  templateUrl: './addedit-ban.component.html',
  styleUrls: ['./addedit-ban.component.scss']
})
export class AddeditBanComponent implements OnInit {

  @ViewChild('addeditBan')
  addeditBan!: NgForm;

  constructor(private service: ServiceService) { }

  @Input() ban: any;
  id: number = 0;
  tenBan: string = "";
  trangthai: boolean = false;

  ngOnInit(): void {
    this.id = this.ban.id;
    this.tenBan = this.ban.ten;
    this.trangthai = this.ban.trangthai;
  }

  addItem() {
    if (this.addeditBan.invalid) {
      alert("Thông tin không hợp lệ");
      return;
    }
    var val = {
      id: this.id,
      ten: this.tenBan,
      trangthai: true,
    }

    this.service.AddBan(val).subscribe(data => {
      alert(data.toString());
    })
  }

  updateItem() {
    if (this.addeditBan.invalid) {
      alert("Thông tin không hợp lệ");
      return;
    }
    var val = {
      id: this.id,
      ten: this.tenBan,
      trangthai: this.trangthai,
    }

    this.service.UpdateBan(val).subscribe(data => {
      alert(data.toString());
    })
  }
}
