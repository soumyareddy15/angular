import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../Services/adminservice.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  retailerList : any = []
  status : any
  result : string;
  otpstatus :any;

  constructor(private adminserv : AdminserviceService) { 
    //retailerid:any;
  }

  ngOnInit(): void {
    this.retailerList = this.adminserv.getRetailers().subscribe(
      data=>{this.retailerList = data;}
    );
    //this.ApporveRetailer(retailerid :number, retaileremail:string);
    
  }
  ApporveRetailer(retailerid :number, retaileremail:string){
    this.status = this.adminserv.sendApproval(retailerid, retaileremail).subscribe(
      data=>{
        this.result = data;
        if(this.result == "Approved"){
           alert("Retailer is approved");
          //this.sendemail(retaileremail);
        }
      }
    )  
  }
  sendemail(retaileremail : string){
    this.otpstatus = this.adminserv.sendemail(retaileremail).subscribe(
      data => {
        this.otpstatus = data;
        if(this.otpstatus){
          alert("Retailer is approved. Mail sent to retailer");
          window.location.reload();
        }
      }
    )
  }

}
