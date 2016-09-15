import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags'
})
export class StripHtmlTagsPipe implements PipeTransform {

  private tagBody: string = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
  private tagOrComment: RegExp = new RegExp(
    '<(?:'
    // Comment body.
    + '!--(?:(?:-*[^->])*--+|-?)'
    // Special "raw text" elements whose content should be elided.
    + '|script\\b' + this.tagBody + '>[\\s\\S]*?</script\\s*'
    + '|style\\b' + this.tagBody + '>[\\s\\S]*?</style\\s*'
    // Regular name
    + '|/?[a-z]'
    + this.tagBody
    + ')>',
    'gi');

  transform(value: string): string {
    let oldHtml;
    do {
      oldHtml = value;
      value = value.replace(this.tagOrComment, '');
    } while (value !== oldHtml);
    return value.replace(/</g, '&lt;');
  }

}
