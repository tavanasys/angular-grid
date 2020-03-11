import { Component, Input } from "@angular/core";
// import { AppConfigService } from "app/core/services/app-config.service";

@Component({
  selector: "kmr-image-cell",
      // (error)="img.src = appConfig.noImageUrl"
  template: `
    <img
      #img
      class="image-grid"
      [src]="imageUrl"
    />
  `,
  // appConfig.imageUrl + 'sm' + 
  styleUrls: ["./image-cell.component.scss"]
})
export class ImageCellComponent {
  @Input() imageUrl: string;

  // constructor(public appConfig: AppConfigService) {}
}
