import {parse_date} from "../Common/util.mjs";
import {Category} from "../Category/CategoryModel.mjs";

export class Product {
    #title;
    #price;
    #pcs;
    #date_added;
    #category;

    constructor(title, category) {
        this.#title = title;
        this.#category = new Category(category);
        // Just defaults for now:
        this.#price = parseFloat("0");
        this.#date_added = new Date();
        this.#pcs = 1;
    }

    get_title() {
        return this.#title
    }

    get_price() {
        return this.#price
    }

    get_amount() {
        return this.#pcs
    }

    get_date_added() {
        return parse_date(this.#date_added)
    }

    // TODO can add validation for fields here:
    set_price(price) {
        this.#price = price
    }

    set_title(title) {
        this.#title = title
    }

    set_amount(amount) {
        this.#pcs = amount
    }

    // Debug printing tool for developers and ...debugging.
    print_debug() {
        return this.#title + " " + this.#category.debug() + " " + this.#price + " " + this.#pcs + " " + this.#date_added
    }

    // Pretty-print for client/end-users.
    print_display() {
        return `Title: ${this.#title}
                Category: ${this.#category.get_type()}
                Price: ${this.#price}
                Pcs: ${this.#pcs}
                Date Added: ${this.get_date_added()}`
    }

    // The toJSON only shows the title for testing purposes
    // in order to tell if its called when JSON.stringify(Product)
    // is called:
    toJSON() {
        return {
            title: this.#title
        }
    }
}

// "Products related to other products" can be a filter operation on products.


