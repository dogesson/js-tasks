let print = {
    print(whatever) {
        console.log(whatever)
    }
}

export class Thing {
    constructor(props) {
        this.props = props;
    }
}

Object.assign(Thing.prototype, print);

