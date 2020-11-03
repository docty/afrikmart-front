import { Component, OnInit } from '@angular/core';
import {WalletService} from '../../../../service/wallet.service';
declare var $: any;
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  data : any;
  dataValue = {
  	marketId: '',
  	withdrawal : '',
  	deposit: '0'

  };

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
  	this.walletService.index().subscribe(m => 
    {
      this.data = m;
      setTimeout(() => $('#datatable').DataTable(), 1000);
    });
  	
  	
  }

  onWithdrawal(): void{
  	this.walletService.store(this.dataValue).subscribe(
      (data: any) => {
           this.ngOnInit();
      }
    );
  }

}
