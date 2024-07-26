import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contentFilter'
})

export class ContnetFilterPipe implements PipeTransform {
    transform(values: string[], searchInput: string) {
        if(values&&searchInput){
            var newValues = values.filter(function(s){
                if(s.indexOf(searchInput)!=-1)
                    return true;
                else
                    return false;
            })
            return newValues;
        }
        return values;
    }
}