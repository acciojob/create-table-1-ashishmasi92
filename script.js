
let table = document.querySelector("#sampleTable");


function insert_Row() {
    let createTr = document.createElement("tr")
let count=0
	for(let i=0;i<2;i++){
	let creatTd = document.createElement("td")
		count++
				creatTd.innerText = "New Cell"+count

		createTr.append(creatTd)
		
		
	}

	table.prepend(createTr)
	

	
  
  
}
