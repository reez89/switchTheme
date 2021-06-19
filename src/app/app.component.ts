import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'switchThemeApp';

/* Variables */
  @HostBinding('class') className = '';
  isDark:boolean = false;
  lastTheme:string = '';
  toggleControl = new FormControl(false);
  switchedCounter: number = 0;

  constructor(){}

/* Methods */
  ngOnInit (){

    //store the value to get the last changed theme on refresh
    this.isDark = localStorage.getItem('theme') === 'dark-mode' ? true : false;
    //set the toggle to dark or light
    this.toggleControl.valueChanges.subscribe(val=>{
      this.className = val ? 'dark-mode' : 'light';
    //increase the counter each time we change value
      if(this.className === 'dark-mode'){
        this.switchedCounter++
      }
    //store the previous value of the theme
      this.lastTheme = localStorage.getItem('lastTheme') === 'dark-mode' ? 'Dark' : 'Light';
    })
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDark ? 'dark-mode' : 'light')
    localStorage.setItem('lastTheme', this.isDark ? 'dark-mode' : 'light')
  }

}
