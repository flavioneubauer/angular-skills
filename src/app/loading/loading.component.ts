import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoadingService } from "./loading.service";

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit{

    active: boolean = false;
    loadingSubscription: Subscription;

    constructor(private loaderService: LoadingService) {
        this.loaderService.status.subscribe((v) => {
            this.active = v;
        });
      }

    ngOnInit(){}

}