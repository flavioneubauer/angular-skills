import { ApplicationRef, 
         ComponentFactoryResolver, 
         ComponentRef, 
         EmbeddedViewRef,
         Injectable,
         Injector,
         NgZone
} from '@angular/core';
import { LoadComponent } from '../components/load/load.component';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  constructor(
    private _appRef: ApplicationRef,
    private _resolver: ComponentFactoryResolver,
    private _injector: Injector,
    private zone: NgZone
  ) {}

  public _components: ComponentRef<any>[] = [];

  open(component?: boolean) {
    this.zone.run(() => {
      const componentRef = this._resolver.resolveComponentFactory(LoadComponent).create(this._injector);
      this._appRef.attachView(componentRef.hostView)
      const element = document.body
      element.appendChild(
        (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
      )
      this._components.push(componentRef)
      componentRef.instance.component = component;
    })
  }

  private _remove(componentRef: ComponentRef<any>) {
    this.zone.run(() => {
      this._appRef.detachView(componentRef.hostView)
      componentRef.destroy()
    })
  }

  close() {
    while (this._components.length > 0) {
      const componentRef = this._components.pop()
      if (componentRef) {
        this._remove(componentRef)
      }
    }
  }
}
