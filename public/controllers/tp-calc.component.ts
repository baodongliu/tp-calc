import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

class Fee {
  public price:          number;
  public shipFee1:       number;
  public salesTaxRate:   number;
  public salesTaxRateStr:   string;
  public salesTax:       number;
  public shipFee2:       number;
  public totalCost:      number;
  public serviceFeeRate: number;
  public serviceFeeRateStr: string;
  public serviceFee:     number;
  public totalUSD:       number;
  public exchangeRate:   number;
  public totalRMB:       number;
  public creditCardRate: number;
  public totalRMBCredit: number;
}

@Component({
  selector: 'my-tpcalc',
  templateUrl: '../views/tp-calc.component.html',
  styleUrls: ['../views/tp-calc.component.css']
})
export class TpCalcComponent {
  price: number;
  finalFee: string;

  fee1 = new Fee();
  fee2 = new Fee();


  calcTpPrice() {
    //this.finalFee = ((+this.price + 30.0) * 1.06 + 100.0) * 6.7;
    //this.finalFee = +(this.finalFee).toFixed(0);
    // this.finalFee = this.price;
    
    this.fee1.price = +this.price;
    this.fee1.shipFee1 = 30.0;
    this.fee1.salesTaxRate = 0.0;
    this.fee1.salesTaxRateStr = String(this.fee1.salesTaxRate * 100) + "%";
    this.fee1.salesTax = this.fee1.price * this.fee1.salesTaxRate;
    this.fee1.shipFee2 = 100.0; 
    this.fee1.totalCost =  this.fee1.shipFee1 + this.fee1.salesTax
                      + this.fee1.shipFee2 + this.fee1.price;
    this.fee1.serviceFeeRate = 0.06;
    this.fee1.serviceFeeRateStr = String(this.fee1.serviceFeeRate * 100) + "%";
    this.fee1.serviceFee = this.fee1.totalCost * this.fee1.serviceFeeRate;
    this.fee1.serviceFee = this.fee1.serviceFee;
    this.fee1.totalUSD = this.fee1.totalCost + this.fee1.serviceFee;
    this.fee1.exchangeRate = 6.7;
    this.fee1.totalRMB = this.fee1.totalUSD * this.fee1.exchangeRate;
    this.fee1.creditCardRate = 0.01;
    this.fee1.totalRMBCredit =  this.fee1.totalRMB 
                                * (1 + this.fee1.creditCardRate);

    this.fee2.price = +this.price;
    this.fee2.shipFee1 = 0.0;
    this.fee2.salesTaxRate = 0.09;
    this.fee2.salesTaxRateStr = String(this.fee2.salesTaxRate * 100) + "%";
    this.fee2.salesTax = this.fee2.price * this.fee2.salesTaxRate;
    this.fee2.shipFee2 = 100.0; 
    this.fee2.totalCost =  this.fee2.shipFee1 + this.fee2.salesTax
                      + this.fee2.shipFee2 + this.fee2.price;
    this.fee2.serviceFeeRate = 0.06;
    this.fee2.serviceFeeRateStr = String(this.fee2.serviceFeeRate * 100) + "%";
    this.fee2.serviceFee = this.fee2.totalCost * this.fee2.serviceFeeRate;
    this.fee2.serviceFee = this.fee2.serviceFee;
    this.fee2.totalUSD = this.fee2.totalCost + this.fee2.serviceFee;
    this.fee2.exchangeRate = 6.7;
    this.fee2.totalRMB = this.fee2.totalUSD * this.fee2.exchangeRate;
    this.fee2.creditCardRate = 0.01;
    this.fee2.totalRMBCredit =  this.fee2.totalRMB 
                                * (1 + this.fee2.creditCardRate);


    if (this.fee2.totalRMB < this.fee1.totalRMB)
      this.finalFee = this.fee2.totalRMB.toFixed(0);
    else
      this.finalFee = this.fee1.totalRMB.toFixed(0);



  }

}




