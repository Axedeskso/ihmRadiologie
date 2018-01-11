import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { ModaliteService } from '../modalite.service';

@Component({
  selector: 'app-add-modalite',
  templateUrl: './add-modalite.component.html',
  styleUrls: ['./add-modalite.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddModaliteComponent implements OnInit {

  sampleForm: FormGroup;

  constructor(private modaliteService : ModaliteService) { }

  ngOnInit() {
    this.sampleForm = new FormGroup({
      'nom': new FormControl(),
      'pacs': new FormControl(),
      'link': new FormControl()
      });
  }

  add(sampleForm: NgForm) : void{
    this.modaliteService.addModalite(sampleForm.value);
    location.reload();
    console.log('Ajout effectué');
  }
}
