
    export class MultiResponsability{
        constructor(url, element){
            this.url = url;
            this.element = element;
        }
        async get(){
            const res = await fetch(this.url);
            const json = await res.json();
            return json;
        }
        printData(data){
            const text = data.reduce((ac, ele) => 
                ac + `<p>${ele.name}</p>`, '');
            this.element.innerHTML = text;
        }
    }
//

    export class SingleFetchResponsability{
        constructor(url){
            this.url = url;
        }
        async get(){
            const res = await fetch(this.url);
            const json = await res.json();
            return json;
        }
    }

    export class SinglePrintResponsability{
        constructor(element){
            this.element = element;
        }
        printData(data){
            const text = data.reduce((ac, ele) => 
                ac + `<p>${ele.name}</p>`, '');
            this.element.innerHTML = text;
        }
    }