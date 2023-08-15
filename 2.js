class items{
	constructor(name,age,sex,dob)
	{
		this.name=name;
		this.age=age;
		this.sex=sex;
		this.dob=dob;
	}
	get iname()
	{
		return this.name;
	}
	set isex(value)
	{
		this.sex=value;
	}

}
let s1=new items("aman",20,'M',"22/11/22");
//s1.isex("mia");
//let name2=prompt("enter the name");
//let s2= new items(name2,20,'F',"22/11/10");
