import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-xem-hoadon',
  templateUrl: './xem-hoadon.component.html',
  styleUrls: ['./xem-hoadon.component.scss']
})
export class XemHoadonComponent implements OnInit {

  constructor(private service: ServiceService) { }

  @Input() Ban: any = {
    id: 0,
    tenBan: "",
  }

  ngOnInit(): void {
  }

}
