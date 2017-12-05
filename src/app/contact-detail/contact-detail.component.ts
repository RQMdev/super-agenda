import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact : Contact;
  id: number;
  private sub: any;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getContact();
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  getContact(): void {
    this.contactService.getContact(this.id)
      .subscribe(contact => this.contact = contact);
  }

  save(): void {
    this.contactService.updateContact(this.contact)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
