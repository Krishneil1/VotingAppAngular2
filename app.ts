import{
    NgModule,
    Component
}from '@angular/core';
import {BrowserModule}from '@angular/platform-browser';
import {platformBrowserDynamic}from '@angular/platform-browser-dynamic';

@Component({
    selector:'Hello World',
    template: `
    <div>
    Hello World
    </div>
    `
})
class HelloWorld{

}
@NgModule({
    declarations:[HelloWorld],
    imports:[BrowserModule],
    bootstrap:[HelloWorld],
})
class HelloWorldAppModule{
}
platformBrowserDynamic().bootstrapModule(HelloWorldAppModule)