const inside = require('point-in-polygon');

data = [
    {
        'name': 'อาคารวิศววัฒนะ - บ้านธรรมรักษา 1',
        'location': [[13.650008, 100.493684], [13.649302, 100.493813], [13.649135, 100.494628], [13.649891, 100.495508], [13.650576, 100.494945],[13.650753, 100.494194]],
        'a1': 1,
        'a2': 7,
        'center': [13.650053, 100.494271]
    },
    {
        'name': 'สำนักงานอธิการบดี',
        'location': [[13.651838, 100.495397], [13.652305, 100.495740], [13.651299, 100.495694], [13.651231, 100.494602]],
        'a1': 0,
        'a2': 0,
        'center': [13.652076, 100.495402]
    },
    {
        'name': 'อาคารเรียนรวม 1',
        'location': [[13.651447, 100.492676],[13.652256, 100.492565], [13.652167, 100.493498], [13.651411, 100.492999]],
        'a1': 3,
        'center': [13.651665, 100.492958]
    },    {
        'name': 'อาคารพระจอมเกล้าราชานุสรณ์ฯ',
        'location': [[13.650589, 100.491454], [13.651335, 100.491491], [13.651335, 100.492340], [13.650381, 100.492254]],
        'a2': 5,
        'center': [13.650897, 100.491970]
    },
    {
        'name': 'อาคารเรียนรวม 3',
        'location': [[13.650268, 100.492065], [13.650388, 100.491490], [13.650018, 100.491249], [13.649497, 100.492027], [13.650048, 100.492506], [13.650332, 100.492187]],
        'a1': 2,
        'a2': 6,
        'center': [13.649873, 100.491938]
    },
    {
        'name': 'สำนักหอสมุด',
        'location': [[13.652188, 100.493295], [13.652153, 100.494491], [13.652711, 100.494137], [13.653321, 100.493702], [13.652740, 100.493825], [13.652425, 100.493825], [13.652133, 100.493753]],
        'a2': 3,
        'center': [13.652451, 100.493949]
    },
    {
        'name': 'สถาบันวิทยาการหุ่นยนต์ฯ',
        'location': [[13.653573, 100.494094], [13.654459, 100.493843], [13.654912, 100.494989], [13.654326, 100.495674], [13.653717, 100.495191]],
        'a2': 2,
        'center': [13.654627, 100.494618]
    },
    {
        'name': 'อาคารเอนกประสงค์',
        'location':  [[100.49316,13.65204],[100.49349,13.65219],[100.49345,13.65256],[100.49302,13.65267],[100.49288,13.6522],[100.49316,13.65204]],
        'a1': 4,
        'a2': 4,
        'center': [13.652094, 100.493147]  
    },
    {
        'name': 'อาคารปฏิบัติการวิทยาศาสตร์ฯ',
        'location': [[100.49458,13.65352],[100.49477,13.65277],[100.49534,13.65298],[100.49545,13.65348],[100.49506,13.65374],[100.49458,13.65352]],
        'a1': 5,
        'a2': 1,
        'center': [13.653170, 100.495483]
    }


];

// function test(geo, data) {
//     for(k in data) {
//         // console.log(data[k].name ,inside(geo, data[k].location));
//         if((inside(geo, data[k].location)) == true) {
//             let dataExport = {
//                 'buildingName':data[k].name,
//                 'nodeRouteA1': data[k].a1,
//                 'nodeRouteA2': data[k].a2
//             };
//             console.log('bus at --> ' + data[k].name);
//             return dataExport;
//         } else return 0;
//     }
// }
// test([13.654592, 100.499442], dataTest);

function readData(geo, data){
    console.log(data.location);
    for(k in data) {
        // console.log(k);
        // console.log(data[k].name ,inside(geo, data[k].location));
        if(inside(geo, data[k].location) == true) {
            let dataExport = {
                'buildingName':data[k].name,
                'nodeRouteA1': data[k].a1,
                'nodeRouteA2': data[k].a2
            };
            // console.log('bus at --> ' + data[k].name);  
            return dataExport;
        }
    }
    return 0;
    // data.forEach(element => {
    //     console.log(element);
    //     console.log(element.name ,inside(geo, element.location));
    //     if (inside(geo, data.location) == true){
    //         let dataExport = {
    //             'buildingName':element.name,
    //             'nodeRouteA1': element.a1,
    //             'nodeRouteA2': element.a2
    //         };
    //         console.log('bus at --> ' + element.name);
    //         return dataExport;
    //     } else return 0;
    // });
}

// console.log(inside([13.661868, 100.505719], polygon));
// console.log(inside([13.659761, 100.504119], polygon));

// const geodata = [13.655259, 100.497331];
// readData(geodata,data);

const run = geoImport => {
    // let dataExport; 
    let dataExports = readData(geoImport, data);
    return dataExports;
}

module.exports.run = run;