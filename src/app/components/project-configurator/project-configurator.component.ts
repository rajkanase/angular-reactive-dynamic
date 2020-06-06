import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project-configurator",
  templateUrl: "./project-configurator.component.html",
  styleUrls: ["./project-configurator.component.css"]
})
export class ProjectConfiguratorComponent implements OnInit {
  projectConfigs = [
    {
      bld_conf_master: "1 bhk",
      bld_conf_project_spec: "1 bhk -- 1",
      quantity: 10.5,
      sqm: 10.5,
      revenue_sqm: 1000,
      total: 100
    },
    {
      bld_conf_master: "2 bhk",
      bld_conf_project_spec: "2 bhk -- 2",
      quantity: 10.5,
      sqm: 20.5,
      revenue_sqm: 2000,
      total: 200
    }
  ];
  clonedCars = {};
  pc2 = [];
  editOn: boolean = false;
  colEnable:boolean = false;
  constructor() {}

  ngOnInit() {}

  onRowEditInit(pc) {
    this.clonedCars[pc.bld_conf_master] = { ...pc };
    console.log(this.clonedCars);
  }

  onRowEditSave(pc) {
    delete this.clonedCars[pc.bld_conf_master];
  }

  onRowEditCancel(pc, index: number) {
    this.pc2[index] = this.clonedCars[pc.bld_conf_master];
    delete this.clonedCars[pc.bld_conf_master];
  }

  editProjectConfigs() {
    this.editOn = true;
    this.colEnable = true;
    // for (let index = 0; index < this.projectConfigs.length; index++) {
    //   console.log(index);
    //   this.clonedCars[this.projectConfigs[index].bld_conf_master] = {
    //     ...this.projectConfigs[index]
    //   };
    // }
    // console.log(this.clonedCars);
  }

  addProjectConfigs() {}
}
