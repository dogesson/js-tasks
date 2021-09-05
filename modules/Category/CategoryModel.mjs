export class Category {
    #type;

    constructor(type) {
        this.#type = type;
    }

    get_type() {
        return this.#type
    }

    debug() {
        return this.#type
    }
}

// Inheritance, but its just dumb thing overall.
// This can be an enum / adt in TypeScript which are thousand times more ergonomic.
class Sports extends Category {
    constructor(type) {
        super(type);
    }
}

class HandEgg extends Sports {
    constructor(type) {
        super(type);
    }
}

// hacky enum
export const CAT_ENUM = Object.freeze({
    HANDEGG: {type: "HandEgg"},
    GOLF: {type: "Golf"},
});
