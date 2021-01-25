import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.MemberName.toLowerCase().startsWith(terms) || it.GrpMemberID.toLowerCase().startsWith(terms); 
    });
  }

}
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {
//   transform(items: any[], terms: string): any[] {
//     if (!items) return [];
//     if (!terms) return items;
  
//     return items.filter(item => {
//       console.log(item.MemberName)
//       return Object.keys(item).some(key => {
//         return String(item.MemberName).toLowerCase().includes(terms.toLowerCase());
//       });
//     });
//    }
// }
