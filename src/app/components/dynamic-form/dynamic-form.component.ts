import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  apps = [];
  form: FormGroup;
  displayRegistry: number = 0;
  formObj: any;
  showForm: boolean = false;
  registryName: string = '';
  applicationsMenu = [
    { name: 'one', value: 'one', done: false },
    { name: 'two', value: 'two', done: false },
    { name: 'three', value: 'three', done: false },
    { name: 'four', value: 'four', done: false },
    { name: 'five', value: 'five', done: false },
  ];
  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      comm_ref: ['', Validators.required],
      applications: this.fb.array([])
    });
  }

  onAppChange(event) {
    const appItem = this.applicationsMenu.find(x => x.value === event.target.value);
    this.apps.push(appItem);
    this.registryName = event.target.value;
    this.apps = _.uniq(this.apps);
    this.addApplication();
  }

  initAppForm(app?) {
    if (app) {
      return this.fb.group({
        registry_name: [this.registryName],
        report_status: [app.report_status, Validators.required],
        rag_status: [app.rag_status, Validators.required],
        comments: [app.comments, Validators.required]
      });
    } else {
      return this.fb.group({
        registry_name: [this.registryName],
        report_status: ['', Validators.required],
        rag_status: ['', Validators.required],
        comments: ['', Validators.required]
      });
    }
  }

  addApplication(app?) {
    const control = <FormArray>this.form.controls['applications'];
    control.push(this.initAppForm(app));
  }

  removeApplication(i: number) {
    const control = <FormArray>this.form.controls['applications'];
    control.removeAt(i);
    this.apps.splice(i, 1);
  }

  saveRegistry(i) {
    this.apps[i].done = true;
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.formObj) {
      let index;
      const storageData = this.getLocalStorage('data');
      const itemFound = storageData ? storageData.find((item, ind) => {
        index = ind;
        return item.comm_ref == this.formObj.comm_ref
      }) : undefined;
      if (itemFound) {
        storageData.splice(index, 1);
        const formData = { ...this.form.value };
        formData['appData'] = this.apps;
        storageData.push(formData);
        this.setLocalStorage('data', storageData);
      }
    } else {
      const formData = { ...this.form.value };
      formData['appData'] = this.apps;
      this.addToLocalStorage('data', formData);
    }
    this.clearForm();
  }

  searchFromStorage(inp: string) {
    console.log('inp', inp)
    const storageData = this.getLocalStorage('data');
    console.log('storageData', storageData)
    const itemFound = storageData ? storageData.find(item => item.comm_ref == inp) : undefined;
    console.log('itemFound', itemFound)
    if (itemFound) {
      console.log('itemFound', 'itemFound')
      this.formObj = itemFound;
      this.apps = this.formObj['appData'];
      this.setFormData();
      this.showForm = true;
    } else {
      console.log('notitemFound', 'notitemFound')
      this.showForm = true;
    }
  }

  setFormData() {
    this.form.controls['comm_ref'].setValue(this.formObj.comm_ref);
    if (this.formObj.applications) {
      this.formObj.applications.forEach(app => {
        this.addApplication(app);
      });
    }
  }

  clearForm() {
    this.initForm();
    this.showForm = false;
    this.apps = [];
  }

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  addToLocalStorage(key: string, data: any) {
    let exData = this.getLocalStorage('data') || [];
    exData.push(data);
    this.setLocalStorage('data', exData);
  }

  getLocalStorage(key: string) {
    let res = localStorage.getItem(key);
    return JSON.parse(res);
  }

}
