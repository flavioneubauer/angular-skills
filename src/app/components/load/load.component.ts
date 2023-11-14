import { AnimationOptions } from "ngx-lottie";
import { Component, Input, ViewEncapsulation } from "@angular/core";
import { LoadModel } from "src/app/models/load.model";


@Component({
  selector: 'app-load-component',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoadComponent {
  @Input() public component = false;
  @Input() public loadText?: string;

  constructor(){}

  options: AnimationOptions = {
    animationData: LoadModel.loadInterface
  };

  optionsComonent: AnimationOptions = {
    animationData: LoadModel.loadComponent
  }
}
