create database sqlproject
use sqlproject
create table main
(
   No_ int identity(1,1) primary key,
   Mytime datetime,
   Theme varchar(30),
   Weather varchar(20),
   Mood varchar(20),
   Body varchar(5000),
) 
create table number
(
  No_ int  
)

go
create view my_show
as
select No_,Theme,Mytime
from main
go

go
create view alllist
as
select No_,Theme,Weather,Mood,Body
from main
go

create procedure insertId(@mynum char(40))
as
  insert into number values (convert(int,@mynum))
go

create procedure pro_update(@mytheme varchar(100),@myweather varchar(60),@mymood varchar(60),
           @mybody varchar(5000))
as
  update main set Theme=@mytheme,
   Weather=@myweather,
   Mood=@mymood,
   Body=@mybody
   where No_ in
   (
     select No_ from number 
   )
go


create procedure pro_select(@mystr varchar(40))
as
 select No_,Theme,Mytime from main where (convert(varchar(40),No_)) like  '%'+ @mystr +'%'
 or convert(varchar(40),Mytime,121) like '%'+ @mystr +'%'
 or Theme like '%'+ @mystr +'%'
 or Weather like '%'+ @mystr +'%'
 or Mood like '%'+ @mystr +'%'
 or Body like '%'+ @mystr +'%'
go

create procedure pro_insert(@mytheme varchar(100),@myweather varchar(60),@mymood varchar(60),
           @mybody varchar(5000))
as
   insert into main values(getdate(),@mytheme,@myweather,@mymood,@mybody)
go

create procedure pro_delete(@Mynum varchar(40))           
as
   delete from main where No_= (convert(int,@mynum))
go


insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'����֮��Ϊ���ͣ��β�����  ','��','����','��ʵ�����˾��Ƿ��Ĳ��£����Ƕ�ֻ���˼�Ĺ��Ͷ��ѣ����������ֿ�������ȥ����һ��ʫд�úã���������ɽ���޺ã�ǰ�˸��ź����գ����������Īϲ�����к�������ң������������ס�ĵط�����֪�����˶��ٵ���������Ҳ������һ������Ϊ�����������ģ����������Ѳ������ˣ����������������ʼ�ʡ�������۶�ӵ�����ｭɽ�������Ǵ����ߵģ������������ˡ�');
   
insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'�ճ�','��','����','���������ܺá�');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'����','��','����','��������⣬����Ҳ���Ų����ˡ�');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'����','��','�ܺ�','�ӷ��㣬��֪��֮�֣���֪��֮�ǣ�');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'�ճ�','��','�ܺ�','���������һ��ȥ��ɽ�������ܵ��˴���Ȼ��ϴ��');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'�ճ�֮С��','��','����','������ȥ���ͣ���Ȼ������С����');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'�ճ�֮����','��','����','�����Һ�С����Լȥ���ͣ����ֽ����Ǽۣ��Һ�С���������ˡ�');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'�ճ�֮���','��','����','�����Һ�С��ȥ��֣�����һλˤ�������ˣ���׼��ȥ����С�������˰���˵������ȥ���ˣ�����һ�����ʲôǮȥ���ͣ������Ҿ������Զԡ�');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'�ճ�֮��ҵ','С��','һ��','С�������ҽ��͵��ϰ廻�ˣ������������У����ǽ����ϵ��������ˣ�Լ��ǰȥ��ǰ���ֽ̣�������۽磬����Ժ��ڽ����϶�������˵������SQL��ҵ��û�����ء���');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'�ճ�֮���','����','ʹ��','С������������ǰ��ֻ��һ�仰��������ɽȥ�ɡ��������˶٣�Ŀ����棬��������ȴ������Щ�����⣬��Ŀ��Զ�����˵���һ�ɽ��͵�����������˵�����ҵ������ϣ��Ǹ�����Ҳ����Ȼ������ˣ��β�ʹ���һ�أ��������������ҵľƣ��������ĵ���ɱ��ݵ��ˡ�������������д��棬�����Զ�������ô�ˣ���
�ұ���������˵������ȥ�ɣ��˲�Ӣ�������꣬��ɳ̫���뵽��SQL��ҵ��û���ã��������е��ѹ����ˡ���');
