import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'switchThemeApp';

  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);
  constructor(){}

  ngOnInit (){
    this.toggleControl.valueChanges.subscribe(val=>{
      this.className = val ? 'dark-mode' : '';
    })
  }

}
