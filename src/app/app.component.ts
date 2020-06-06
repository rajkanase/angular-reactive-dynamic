import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "demo-project";
  value = new Date();
  data = [
    {
      _id: "5e05db061d665800121f2a8f",
      project_id: 393826,
      orion_element_id: "5e05db061d665800121f2a8e",
      orion_element_name: "Accordion",
      task_id: "2d259c70-2891-11ea-90ed-33bc5f480f44",
      task_name: "Task One",
      task_type: "Task",
      parent_id: "0",
      duration: 1
    },
    {
      _id: "5e05db061d665800121f2a90",
      project_id: 393826,
      orion_element_id: "5e05db061d665800121f2a8e",
      orion_element_name: "Accordion",
      task_id: "31b62110-2891-11ea-90ed-33bc5f480f44",
      task_name: "Task Two",
      task_type: "Project",
      parent_id: "0",
      duration: 2
    },
    {
      _id: "5e05db061d665800121f2a91",
      project_id: 393826,
      orion_element_id: "5e05db061d665800121f2a8e",
      orion_element_name: "Accordion",
      task_id: "c1de1ef0-2891-11ea-8697-278f902f8299",
      task_name: "Task 2.1",
      task_type: "Task",
      parent_id: "31b62110-2891-11ea-90ed-33bc5f480f44",
      duration: 1
    },
    {
      _id: "5e05db061d665800121f2a92",
      project_id: 393826,
      orion_element_id: "5e05db061d665800121f2a8e",
      orion_element_name: "Accordion",
      task_id: "c7a41650-2891-11ea-8697-278f902f8299",
      task_name: "Task 2.2",
      task_type: "Task",
      parent_id: "31b62110-2891-11ea-90ed-33bc5f480f44",
      duration: 1
    }
  ];
  onBtnClick() {
    let a = this.createAccordionTree(
      this.data,
      "task_id",
      "parent_id",
      "childrens"
    );
    console.log(a);
  }

  createAccordionTree(list, idAttr, parentAttr, childrenAttr) {
    if (!idAttr) idAttr = "task_id";
    if (!parentAttr) parentAttr = "parent_id";
    if (!childrenAttr) childrenAttr = "childrens";

    var treeAccordion = [];
    var lookup = {};
    list.forEach(function(obj) {
      lookup[obj[idAttr]] = obj;
      obj[childrenAttr] = [];
    });
    list.forEach(function(obj) {
      if (obj[parentAttr] != "0") {
        lookup[obj[parentAttr]][childrenAttr].push(obj);
      } else {
        treeAccordion.push(obj);
      }
    });
    return treeAccordion;
  }
}
