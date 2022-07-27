import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from './config';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      });
  }

}
