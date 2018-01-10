import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { CcamService } from '../ccam.service';

@Component({
  selector: 'app-add-ccam',
  templateUrl: './add-ccam.component.html',
  styleUrls: ['./add-ccam.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddCcamComponent implements OnInit {

  sampleForm: FormGroup;

  constructor(private ccamService : CcamService) { }

  ngOnInit() {
    this.sampleForm = new FormGroup({
      'code': new FormControl(),
      'libelle': new FormControl(),
      'cout': new FormControl()
      });
  }

  add(sampleForm: NgForm) : void{
    this.ccamService.addCcam(sampleForm.value);
    location.reload();
  }
}
