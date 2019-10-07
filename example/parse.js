const slugify = require('slugify');

const request_1 = require('./85-broadst.json');
const request_2 = require('./400-broadway.json');
const request_3 = require('./32-monroe-st.json');



console.log(request_1['features'][0])



function aggregate_results (payload) {
    const features = payload['features']
    return features.reduce((a, b)=> {
        // console.log(b)
        let key = `${b.properties.on_street}_${b.properties.from_street}_${b.properties.to_street}`
        key = slugify(key);
        // console.log(key)
        if (a.hasOwnProperty(key)) {
            a[key].append(b);
        }
        b[key] = [b]
        return a
    }, {})
}


function main() {

    return aggregate_results(request_1)
}


console.log(main()) 