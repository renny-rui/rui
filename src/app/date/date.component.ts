import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  imgPath: string;
  imgs = ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1080826656,1945724757&fm=26&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3432861484,545669681&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=136566654,3568867582&fm=26&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1525488151,3801783726&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2247309446,458064528&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1847613445,2119963012&fm=26&gp=0.jpg'];
  constructor() {
    this.imgPath = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573136385284&di=915644941c9d8f40d6f2cb4fbb50aae4&imgtype=0&src=http%3A%2F%2Fc11.eoemarket.com%2Fapp0%2F669%2F669163%2Fscreen%2F3335757.png';
  }

  ngOnInit() { }
  changeItem(): void {
    this.imgPath = this.imgs[Math.round(Math.random() * 6)];
  }
}
