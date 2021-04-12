import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.css']
})
export class ColorDetailComponent implements OnInit {

  constructor(private colorService:ColorService) { }

  colors: Color[]=[]
  ngOnInit(): void {
    this.getColors();
  }

    getColors(){
      this.colorService.getColors().subscribe(response=>{
        this.colors=response.data
      })
    }
}
