function getUserFromDB() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
           resolve({id:1,name:'ion' });
        }, 2* 1000)
        
    })
}

function getUserAddressFromDB(userId) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
           resolve({street:'principala' });
        }, 3* 1000)
        
    })
}

function getuserDetails() {
	getUserFromDB().then(val => {
		debugger;
		getUserAddressFromDB(val.id).then(userAddress => {
			getUserAddressFromDB(val.id).then(userAddress => {
			
				getUserAddressFromDB(val.id).then(userAddress => {
			
					getUserAddressFromDB(val.id).then(userAddress => {
			
					})		
				})

				debugger;	
			})
			debugger;	
		})	

	})

}


//getuserDetails();

function getuserDetails1() {
	getUserFromDB().then(val => {
		debugger;
	 	return getUserAddressFromDB(val.id);
	})
}



function getuserDetails2() {
	getuserDetails1().then(val => {
		debugger;
		asd.then
	})
	.catch()
}








