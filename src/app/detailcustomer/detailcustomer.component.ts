import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../services/customer/customer.service';
import {Customer} from '../models/Customer.model';

@Component({
  selector: 'app-detailcustomer',
  templateUrl: './detailcustomer.component.html',
  styleUrls: ['./detailcustomer.component.scss']
})
export class DetailcustomerComponent implements OnInit {

  customer: Customer | undefined;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) {
  }

  ngOnInit() {
    this.getCustomerDetail();
  }

  getCustomerDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const customerId = +id;
      this.customerService.getCustomerById(customerId).subscribe((customer) => {
        this.customer = customer;
      });
    } else {
      console.error('Erreur lors de la récupération de l\'utilisateur');

    }

  }
}
