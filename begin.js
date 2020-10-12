function begin()
{
	var srct=document.getElementById("wb").value
	var srct=srct.split(' ')
	var root=new Array();
	var tenum=0
	var student=new Array();
	var stnum=0

	for(var i=0;i<srct.length;i++)
	{   		
			if(srct[i][0]=='导'&&srct[i][1]=='师')//若字符串以导师开头，则以前三位之后的字符创建root节点
		{root[tenum]=creatRoot(srct[i].slice(3))
			tenum+=1;
		}
		else if(srct[i][0]>='0'&&srct[i][0]<='9')
		{	y=srct[i].split('级')[0]
			e=(srct[i].split('级')[1]).split('：')[0]		
			c=(srct[i].split('级')[1]).split('：')[1]
			c=c.split('、')
			for(var j=0;j<c.length;j++)
			{	student[stnum]=creatTree(c[j],y,e)
				addStudent(root[tenum-1],student[stnum],y,e)
				stnum+=1
			}	
			
		}
		else  if(srct[i][0]!=' ')
		{	
				ab=srct[i].split('：')
			for(var k=0;k<student.length;k++)
			{	
				if(student[k].name==ab[0])
				{
					student[i].ablity+=ab[1]
				}
			}
			
		 }
		
		
	}

}
