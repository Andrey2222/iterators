var list = [
	{
	title: "sun",
	is_completed: true,
	user_id: 20,
	user_name: "Andrey",
	user_surname: "Ryzhynskyi",
	todo_quantity: 5,
	},
	{
	title: "#sucсes",
	is_completed: false,
	user_id: 15,
	user_name: "Stiv",
	user_surname: "Djobs",
	todo_quantity: 13,
	},
	{
	title: "creative",
	is_completed: true,
	user_id: 12,
	user_name: "Pavel",
	user_surname: "Durov",
	todo_quantity: 10,
	},
	{
	title: "#crazy",
	is_completed: false,
	user_id: 5,
	user_name: "Donald",
	user_surname: "Tramp",
	todo_quantity: 3,
	},
];
function completedbBusiness(list){
  return list.filter(function(item){
    	return item.is_completed;
  	});
}
function haveSharp(list){
  	return list.filter(function(item){
    	return item.title.indexOf("#") != -1;
  	});
}
function sumAllElement(list){
	return list.reduce(function(sum, item){
  		return sum + item.todo_quantity;
	}, 0);
}
function delimiter(list){
  return list.filter(function(item) {
    	return item.user_id % 10 == 0;
  	});
}
function fullName(list){
	return list.map(function(item){
		item.full_name = item.user_surname + " " + item.user_name;
		return item.full_name;
	});
}
//не могу добиться того чтобі ссвойство full_name записалось в каждій обьект масива
console.log(fullName(list))
console.log(list)
function notCompletedbusiness(list){
	 return list.filter(function(item){
    	return !item.is_completed;
  	});
}
function sort (list){
	return notCompletedbusiness(list).concat(completedbBusiness(list));
}
console.log(sort (list))