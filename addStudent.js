function addStudent(teacher,st,y,e)
{	
	if(teacher.student[e]=='无'+e)
	{	
		teacher.student[e]={y:[st]}
		teacher.student[e][y]=[st]
		
	}
	else if((typeof teacher.student[e][y])=='object')
	{	
		teacher.student[e][y].push(st)
		
	}
	else if((typeof teacher.student[e][y])=='undefined')
	{	
		teacher.student[e][y]=[st]
	}
	
}
