import { Injectable, NgModuleRef, NgModuleFactoryLoader, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyModuleService {

    constructor( private loader: NgModuleFactoryLoader, private injector: Injector) { }

    private moduleRef: NgModuleRef<any>;

    public load(loadAll: boolean = true) {
        if (this.moduleRef) {
            return Promise.resolve();
        }

        console.log('loading modules...', loadAll);

        const paths: string[] = [
            'src/app/web-components/element-a/element-a.module#ElementAModule',
            'src/app/web-components/element-b/element-b.module#ElementBModule',
            'src/app/web-components/element-c/element-c.module#ElementCModule'
        ];

        if (loadAll) {
            return paths.forEach(modulePath => {
                return this.loader
                .load(modulePath)
                .then(moduleFactory => {
                    this.moduleRef = moduleFactory.create(this.injector).instance;
                    console.log('Module loaded! =>', this.moduleRef);
                })
                .catch(err => {
                    console.error('error loading module', err);
                });
            });
        } else {
            return this.loader
            .load((paths[0]))
            .then(moduleFactory => {
                this.moduleRef = moduleFactory.create(this.injector).instance;
                console.log('Module loaded! =>', this.moduleRef);
            })
            .catch(err => {
                console.error('error loading module', err);
            });
        }
    }
}
