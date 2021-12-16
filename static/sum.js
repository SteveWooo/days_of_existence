window.onload=function(){
    GetDays();
}
var birthday=19950510;
var LifeDays=0;
var NowDay;
var now=new Date();
var year;
var month;
var day;

var days40;
var agess;
var y;
var m;
var d;

function input()
{
	var i;
	var j;
	var yues=new Array();
	 for(i=0;i<2;i++){          //一维长度为10       
	 yues[i]=new Array();    //在声明二维         
	  for(j=0;j<13;j++){      //二维长度为20           
	    yues[i][j]=1; 
	  }
	}
    yues[0][0]= 0;
	yues[0][1]=31;
	yues[0][2]=28;
	yues[0][3]=31;
	yues[0][4]=30;
	yues[0][5]=31;
	yues[0][6]=30;
	yues[0][7]=31;
	yues[0][8]=31;
	yues[0][9]=30;
	yues[0][10]=31;
	yues[0][11]=30;
	yues[0][12]=31;
	
	yues[1][0]= 0;
	yues[1][1]=31;
	yues[1][2]=29;
	yues[1][3]=31;
	yues[1][4]=30;
	yues[1][5]=31;
	yues[1][6]=30;
	yues[1][7]=31;
	yues[1][8]=31;
	yues[1][9]=30;
	yues[1][10]=31;
	yues[1][11]=30;
	yues[1][12]=31;
	var kk;
	
	while(1)//判断日期合理性,y,m,d为输入的日期，
	{
		birthday=window.prompt("请输入你的出生年月日（如19950510）：","");
		year=now.getFullYear();
        month=now.getMonth()+1;
        day=now.getDate();
		y=Math.ceil(birthday/10000)-1;                  
		m=Math.ceil((birthday%10000)/100)-1;
		d=birthday%100;
		if(y>=year)continue;
		if(y-year==0)//不能大于当前日
		{
			if(m-month==0)
			{
				if(d>=day)continue;
			}
			else if(m-month>0)
			{
				continue;
			}
		}
		if((y%4==0&&y%100!=0)||y%400==0)//不能不合理
		{
			kk=1;
		}
		else kk=0;
		if(d-yues[kk][m]>0||d<=0)
		{
			continue;
		}
		if(m-12>0||m<0)
		{
			continue;
		}
		break;
		
	}

	sum();
	if(7305-LifeDays>=0)
	{
		agess=20;
		days40=7305-LifeDays;
	}
	else if(LifeDays-9132<=0)
	{
		agess=25;
		days40=9132-LifeDays;
	}
	else if(LifeDays<=10958)
	{
		agess=30;
		days40=10958-LifeDays;
	}
	else if(LifeDays<=14610)
	{
		agess=40;
		days40=14610-LifeDays;
	}
	else if(LifeDays<=18263)
	{
		agess=50;
		days40=18263-LifeDays;
	}
	else if(LifeDays<=21915)
	{
		agess=60;
		days40=21915-LifeDays;
	}
	else if(LifeDays<=29220)
	{
		agess=80;
		days40=29220-LifeDays;
	}
	else if(LifeDays<=36525)
	{
		agess=100;
		days40=36525-LifeDays;
	}
	else if(LifeDays<=43829)
	{
		agess=120;
		days40=43829-LifeDays;
	}
	else 
	{
		agess=200;
		days40=73049-LifeDays;
	}
	document.getElementById("days").innerHTML=LifeDays;
	
	document.getElementById("line0").style.visibility="visible";
	document.getElementById("line").style.visibility="visible";
	document.getElementById("line1").style.visibility="visible";
	document.getElementById("da").style.visibility="visible";
	document.getElementById("da1").style.visibility="visible";
	document.getElementById("ages").innerHTML=agess;
	document.getElementById("days40").innerHTML=days40;
	document.getElementById("title1").innerHTML="我活了"+LifeDays+"天，离"+agess+"岁还有"+days40+"天";
}

function GetDays()
{

	year=now.getFullYear();
	month=now.getMonth()+1;
    day=now.getDate();
	NowDay=year*10000+month*100+day;
	input();
}
function sum()
{
	var i;
	var j;
	var yues=new Array();
	 for(i=0;i<2;i++){          //一维长度为10       
	 yues[i]=new Array();    //在声明二维         
	  for(j=0;j<13;j++){      //二维长度为20           
	    yues[i][j]=1; 
	  }
	}
    yues[0][0]= 0;
	yues[0][1]=31;
	yues[0][2]=28;
	yues[0][3]=31;
	yues[0][4]=30;
	yues[0][5]=31;
	yues[0][6]=30;
	yues[0][7]=31;
	yues[0][8]=31;
	yues[0][9]=30;
	yues[0][10]=31;
	yues[0][11]=30;
	yues[0][12]=31;
	
	yues[1][0]= 0;
	yues[1][1]=31;
	yues[1][2]=29;
	yues[1][3]=31;
	yues[1][4]=30;
	yues[1][5]=31;
	yues[1][6]=30;
	yues[1][7]=31;
	yues[1][8]=31;
	yues[1][9]=30;
	yues[1][10]=31;
	yues[1][11]=30;
	yues[1][12]=31;
    
	var flag;
	var sum=0;
	var sum1=0,sum2=0,sum3=0;
	var nian2=Math.ceil(birthday/10000)-1;
	var yue2=Math.ceil((birthday%10000)/100)-1;
	ri=day;
	ri2=Math.ceil(birthday%100);
    for(; nian2<year; nian2++)
    {
        flag=1;
        if((nian2%4==0&&nian2%100!=0)||nian2%400==0)
            flag=1;
        else
            flag=0;
        if(flag-1==0)
            sum=sum+366;
        if(flag==0)
            sum=sum+365;
    }
    if((year%4==0&&year%100!=0)||year%400==0)
        flag=1;
    else
        flag=0;
    for(i=1; i<month; i++)
    {
        sum1=sum1+yues[flag][i];
    }
    sum1=sum1+ri;
	if((nian2%4==0&&nian2%100!=0)||nian2%400==0)
        flag=1;
    else
        flag=0;
    for(i=1; i<yue2; i++)
    {
        sum2=sum2+yues[flag][i];
    }
    sum2=sum2+ri2;
	sum3=sum1-sum2;
    sum=sum+sum3;
	LifeDays=sum;
}

