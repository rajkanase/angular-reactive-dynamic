import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConfiguratorComponent } from './project-configurator.component';

describe('ProjectConfiguratorComponent', () => {
  let component: ProjectConfiguratorComponent;
  let fixture: ComponentFixture<ProjectConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
