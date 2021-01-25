import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  payment_details(m_id){
    return this.http.get(environment.Baseurl+'chitdetails/Mid?Mid='+m_id);
}
cash_details(branch){
  return this.http.post(environment.Baseurl+'ReceiptTable/AddList',branch)
}
post_vouchercash(cashvoucher){
  return this.http.post(environment.Baseurl+'VoucherCreditDebit/AddList',cashvoucher)

}
post_defaultvouchercash(defaultvoucher){
  return this.http.post(environment.Baseurl+'DefaultCreditDebit/AddList',defaultvoucher)

}
receipt_update(return_value){
  return this.http.post(environment.Baseurl+'ReceiptTable/Update',return_value)

}

print_details(print_id){
  return this.http.get(environment.Baseurl+'AppVoucherPrint/AppReceiptno?AppReceiptno='+print_id,)

}
receiptseries(series){
	return this.http.get(environment.Baseurl+'ReceiptNo/Series?Series='+series)
}

}
