import {Component} from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {LoadingService} from "../../services/loading.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressSpinner,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  constructor(public loadingService: LoadingService) {

  }

}
