import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeSafeUrl'
})
export class myYoutubeSafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  public transform(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1`);
  }

}
