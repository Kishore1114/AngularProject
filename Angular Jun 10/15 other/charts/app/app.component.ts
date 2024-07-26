import { Component } from "@angular/core";

@Component({
    selector:"app-root",
    templateUrl:"app.component.html"
})
export class AppComponent{

    myChartConfig = {
        "type":"AreaChart",
        "data": [
            ['London', 8136000],
            ['New York', 8538000],
            ['Paris', 2244000],
            ['Berlin', 3470000],
            ['Kairo', 19500000]           
          ]
    }

}