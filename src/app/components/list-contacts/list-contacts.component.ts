import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contacts';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contacts;
  myContact: Contact;
  statusContact: boolean= false

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
        this.contacts = contacts;
        console.log(this.contacts)
    });
  }


  updateContact( contact) {
    this.contactService.updateContact(contact);
    this.statusContact = false;
  }

  editContact(contact) {
    this.statusContact = true;
    this.myContact     = contact;
  }

  deleteContact(contact){
    if(confirm("Are sure to delete this contact !!")){
      this.contactService.destroyContact(contact);
    }else{
      this.statusContact = false;
    }
  }

}
