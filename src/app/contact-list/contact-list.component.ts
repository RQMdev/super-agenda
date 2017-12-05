import { Component, OnInit } from '@angular/core';
import { CONTACT_LIST } from '../contact-list-mock';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[];
  selectedContact : Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContactList();
  }

  getContactList(): void {
    this.contactService.getContactList()
    .subscribe(contactList => this.contactList = contactList);
  }

  onSelect(contact: Contact) : void {
    this.selectedContact = contact;
  }

}
