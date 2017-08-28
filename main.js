class Rose {
    constructor() {
        this.name = 'Rose';
        this.boyfriend = [];
    }
    reaction(bear) {
        if (bear.name === 'Billy') {
            console.log('I love Billy');
            this.boyfriend.push(bear);
        } else if (bear.name === 'Jack') {
            console.log('I love Jsck');
            this.boyfriend.push(bear);
            console.log(boyfriend);
        } else {
            console.log('Error');
        }
    }
}

 class MaleBear {
    constructor(name) {
        this.name = name;
    }
    reaction(bear) {
        if(this.name === 'Billy') {
            if(bear.name === 'Rose') {
                console.log('I love Rose')
            } else if(bear.name==='Jack') {
                console.log('I do not love male')
            }
        } else if(this.name === 'Jack'){
            if(bear.name === 'Rose') {
                console.log('I love Rose like friend')
            } else if(bear.name === 'Billy') {
                console.log('I do not love male')
            }
        } else {
            console.log('Error');
        }
    }
}
