import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class LoadingService{
    public status = new BehaviorSubject(false);
    private _active: boolean = false;
    

    public get active(): boolean{
        return this._active;
    }

    public set active(v: boolean){
        this._active = v;
        this.status.next(v);
    }

    public start(){
        this.active = true;
    }

    public stop(){
        this.active = false;
    }
}