import * as filterisasi from "./filterisasi";

let {
	sort_int,
	clear_paste,
	c
} = filterisasi;

//array pembanding

// let a = [
// 	{
// 		nama: "budi",
// 		umur: 28,
// 		status: "jomblo",
// 		id: null	
// 	},
// 	{
// 		nama: "rudi",
// 		umur: 20,
// 		status: "jomblo",
// 		id: null	
// 	},
// 	{
// 		nama: "andi",
// 		umur: 13,
// 		status: "jomblo",
// 		id: null	
// 	}
// ];

// let b = [
// 	{
// 		nama: "rudi",
// 		umur: 19,
// 		status: "nikah",
// 		id: null	
// 	},
// 	{
// 		nama: "andi",
// 		umur: 79,
// 		status: "jomblo",
// 		id: null
// 	}
// 	,{
// 		nama: "budi",
// 		umur: 15,
// 		status: "nikah",
// 		id: null
// 	}
// 	,{
// 		nama: "ari",
// 		umur: 18,
// 		status: "nikah",
// 		id: null
// 	}
	
// ];


export let Reciprocal = (a: any, b : any,QUERY: string)=>{


// syarat timbal balik adalah ke 2 array pembanding harus sama nilai nya
let timbalBalik = (ao: any[],bo: any[],fn: Function): any =>{

	// mengambil semua property
	let property: Array<string[]> = [Object.keys(ao[0]),Object.keys(bo[0])];
	let check: string[] = [];
	let result: any[] = [];

	if(ao.length > bo.length) return;
	if(ao.length < bo.length){
		for(let x = ao.length; x < bo.length; x++){
			if(bo[x]){
				ao[x] = bo[x-1];
				ao[x+1] = bo[x];
			}
		}
	}

	// c(ao)

	for(let x = 0; x  < ao.length; x++){
		// console.log(x)
		for(let z = 0; z < bo.length; z++){

			for(let a1 in bo[z]){
				if(ao[x].hasOwnProperty(a1)) check.push(a1);

			}

			if(check.length !== property[1].length){

			}

			for(let a2 in bo[z]){
				fn({object: [ao[x],bo[z]],first: ao[x][a2],second: bo[z][a2],indexFirstObject: x,indexSecondObject: z},result);
			}

		}
	}

	// c(check)

	let final_data = clear_paste(result, typeof result);
	for(let x = 0; x < final_data.length; x++){
		ao[final_data[x].id] = final_data[x];
	}

	ao.splice(ao.length-1,ao.length)
	return ao;

	// for(let x of property[1]){
	// 	for(let y of a){
	// 		for(let z in y){
	// 			if(y.hasOwnProperty(x)){
	// 				console.log("has own ",x);
	// 				break;
	// 			}else{
	// 				// throw `first value is not same with second value`;
	// 				break;
	// 			}
	// 		}
	// 	}
	// }

}

let element: any = timbalBalik(a,b,(condition: any,result: any[])=>{

	// c(condition)

	if(condition.first === condition.second && condition.indexFirstObject !== condition.indexSecondObject){
		condition.object[0].id = condition.indexSecondObject;
		result.push(condition.object[0]);
		return;
	}

});

let RESULT = (a: any = [], b: any = [],condition: string = ""): any =>{

	let query: string[] = condition.split(/\s+/igm);
	let all_query: string[][] = [];
	let property: string[] = [];

	let a1 = 0;
	for(let i = 0; i <= query.length; i+=5){
		if(i !== query.length) all_query.push(query.slice(i,i+5));
	}

	for(let _x of all_query){
		property.push(_x[0]);
		delete _x[0];
	}

	for(let _x = 0; _x < a.length; _x++){
		for(let _y = 0; _y < b.length; _y++){
			for(let props of property){
				if(a[_x].hasOwnProperty(props) && b[_y].hasOwnProperty(props)){
					for(let z of all_query){
						for(let z1 = 0; z1 < z.length; z1++){
							if(z[z1] === "a" && z[z1+1] === "to" && z[z1+2] === "b" &&z[z1] !== "from" && b[_y][props] !== null){
								b[_x][props] = a[_x][props];
							}
							if(z[z1] === "b" && z[z1+1] === "to" && z[z1+2] === "a" &&z[z1] !== "from" && b[_y][props] !== null){
								a[_x][props] = b[_x][props];
							}
						}
					}
				}
			}
		}
	}


}

RESULT(element,b,QUERY);

return element;

}

