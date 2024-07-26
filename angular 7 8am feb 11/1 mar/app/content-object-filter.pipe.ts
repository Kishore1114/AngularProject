import { Student } from './student';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contentObjectFilter'
})

export class ContnetObjectFilterPipe implements PipeTransform {
    transform(values: Student[], searchInput: number) {
        if(values&&searchInput){
            var newValues = values.filter(function(s){
                if(s.id==searchInput)
                    return true;
                else
                    return false;
            })
            return newValues;
        }
        return values;
    }
}