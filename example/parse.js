const slugify = require('slugify');

const request_1 = require('./85-broadst.json');
const request_2 = require('./400-broadway.json');
const request_3 = require('./32-monroe-st.json');



// console.log(request_1['features'][0])


// question, Name, Subtype, Description / Copy
const smo_code_lookup = {
     "streetcleaning": ["PS-154B", "Street Cleaning","When are the streets sweeped"], 
     "paidparking": [["PS-9A"], "", "Metered Parking"],
     "loadingzone": [["PS-279C", "PS-153E"], ""]
}

function aggregate_results (payload) {
    const features = payload['features']
    return features.reduce((a, b)=> {
        let key = `${b.properties.on_street}_${b.properties.from_street}_${b.properties.to_street}`
        key = slugify(key);
        if (a.hasOwnProperty(key)) {
            a[key].push(b);
        } else {
          a[key] = [b]
        }

        return a
    }, {})
}


function answer_parking_formatter(r) {

    return `The nearest parking is at ${r.properties.on_street} between the intersection of ${r.properties.from_street} and ${r.properties.to_street}`

}
function answer_parking(summary) {
    // Thin Wrap the result into an answer 
    res = Object.entries(summary).map((val, index)=>{
        let key = val[0]
        let signs = val[1]
        const smo_code = smo_code_lookup['paidparking'][2]

        return [key, signs.filter(a=>a.properties.smo_subtype == smo_code)]
    })
    answer = res.filter(a=>a[1].length > 0)
    return { 
        "answer": answer_parking_formatter(answer[0][1][1]),
        "results": answer 
    }
}

function answer_streetcleaning(summary) {
    // Thin Wrap the result into an answer 
    res = Object.entries(summary).map((val, index)=>{
        let key = val[0]
        let signs = val[1]
        const smo_code = smo_code_lookup['streetcleaning'][0]

        
        x = val[0]['properties']
        return signs.filter(a=>a.properties.smo_code == smo_code)
        return signs.map(a=>a.properties.sign_description)
    })
    answer = res.flat()

    return { 
        "answer": answer_streetcleaning(answer[0]),
        "results": answer 
    }
}

function answer_streetcleaning(summary) {
    // Thin Wrap the result into an answer 
    res = Object.entries(summary).map((val, index)=>{
        let key = val[0]
        let signs = val[1]
        const smo_code = smo_code_lookup['streetcleaning'][0]

        return [key, signs.filter(a=>a.properties.smo_code == smo_code)]
    })
    answer = res.filter(a=>a[1].length > 0)
    return { 
        "answer": answer_streetcleaningformatter(answer[0][1][1]),
        "results": answer 
    }
}
function answer_streetcleaningformatter(r) {
    return `The street schedule is ${r.properties.sign_description}  ${r.properties.on_street} between the intersection of ${r.properties.from_street} and ${r.properties.to_street}`
}

function main(res, address, question) {

    /*
    Res = @JSON proxy from nycdot.net
    Address = @String from Google
    Question = ENUM of question types 
    */

    // ** Q1 
    // const result = aggregate_results(request_1)
    // let response = {
    //     'address': "address",
    //     "question": "question",
    //     "result": answer_parking(result)
    // }
    // response = answer_parking(result)
    // ** Q1 END


    // ** Q2
    const result = aggregate_results(request_2)
    let response = {
        'address': "address",
        "question": "question",
        "result": answer_streetcleaning(result)
    }
    response = answer_streetcleaning(result)

    return response

} 

console.log(main())

console.log(JSON.stringify(main({}, "400 broadway st", 0),   null, 2))

