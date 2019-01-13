import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contacts';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  statusContact: boolean = false;

  contact: Contact = {
      name: "",
      phone: 0
  }

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  newContact() {
    this.contactService.createContact(this.contact);
    this.contact.name = '';
    this.contact.phone = null;
    this.statusContact = false;
  }

}
