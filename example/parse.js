const slugify = require('slugify');

const request_1 = require('./85-broadst.json');
const request_2 = require('./400-broadway.json');
const request_3 = require('./32-monroe-st.json');



// console.log(request_1['features'][0])



function aggregate_results (payload) {
    const features = payload['features']
    return features.reduce((a, b)=> {
        // console.log(b)
        let key = `${b.properties.on_street}_${b.properties.from_street}_${b.properties.to_street}`
        key = slugify(key);
        // console.log(key)
        if (a.hasOwnProperty(key)) {
            a[key].push(b);
        } else {
          a[key] = [b]
        }
        // console.log(a)
        return a
    }, {})
}

function answer_parking(summary) {
    // Thin Wrap the result into an answer 
    res = Object.entries(summary).map((val, index)=>{
        let key = val[0]
        let signs = val[1]

        
        x = val[0]['properties']
        
        // return x
        return signs.map(a=>a.properties.sign_description)
    })
    return res
}


function main() {

    const result = aggregate_results(request_1)
    return answer_parking(result)
}


console.log(main()) 