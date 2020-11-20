import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../../service/client.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  slider = {
  	title : '',
  	introduction : '',
  	message : '',
  	src : 'materials/all',
  	type : 'slider'
  }

  banner = {
  	title : '',
  	price : '',
  	src : 'materials/all',
  	type : 'banner'
  }
  dataValue: any;
  
  files: File[] = [];
  filesBanner: File[] = [];
  uri: string;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  	this.uri = this.clientService.getURI();
  	this.clientService.index().subscribe(
  		data => {
  			this.dataValue = data;
  			$('.spinner-border').css('display', 'none');
  			
  		});
  }

  onSubmitSlider(){
  	 let formData: any = new FormData();
  	formData.append("file", this.files[0]);
  	formData.append("title", this.slider.title);
  	formData.append("introduction", this.slider.introduction);
  	formData.append("message", this.slider.message);
  	formData.append("src", this.slider.src);
  	formData.append("type", this.slider.type);

  	this.clientService.store(formData).subscribe(
  		data => {
  			alert(data);
  		});
  	
  }

	onSelect(event) {
        this.files.push(...event.addedFiles);
    }
  
    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
    }

    onDelete(id){
    	Swal.fire({
        title: 'Are you sure to delete this item ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes, delete',
      }).then((isConfirm) => {
        if (isConfirm.value) {
          this.clientService.delete(id).subscribe(
            () => {
              Swal.fire('Successful', 'Item has been deleted', 'success');
              this.ngOnInit();
            }
          );
        }
      });
    	
    }



    /******************   BANNER  PROPERTIES    ******************************/
    onSubmitBanner(){
  	 	let formData: any = new FormData();
	  	formData.append("file", this.filesBanner[0]);
	  	formData.append("title", this.banner.title);
	  	formData.append("price", this.banner.price);
	  	formData.append("src", this.banner.src);
	  	formData.append("type", this.banner.type);

	  	this.clientService.store(formData).subscribe(
	  		data => {
	  			console.log(data);
	  		});
  	
  	}


  	
  	onSelectBanner(event) {
        this.filesBanner.push(...event.addedFiles);
    }
  
    onRemoveBanner(event) {
        this.filesBanner.splice(this.filesBanner.indexOf(event), 1);
    }
}
