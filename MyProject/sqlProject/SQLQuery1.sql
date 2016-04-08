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
values(getdate(),'感想之既为过客，何不放下  ','晴','舒适','其实忘不了就是放心不下，我们都只是人间的过客而已，空手来，又空手来回去。有一首诗写得好：“苍田青山无限好，前人耕耘后人收；寄语后人且莫喜，更有后人乐逍遥！”就是我们住的地方，不知经过了多少地主，他们也和我们一样，以为那土地是他的，现在他早已不存在了，但土地仍在那里。秦始皇、凯撒大帝都拥有万里江山，但人是带不走的，还是易手他人。');
   
insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'日常','晴','舒适','今天天气很好。');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'感想','阴','很糟','天气很糟糕，心情也跟着不好了。');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'感想','晴','很好','子非鱼，安知鱼之乐？安知鱼之忧？');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'日常','晴','很好','今天和朋友一起去爬山，心灵受到了大自然的洗礼。');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'日常之小明','晴','舒适','今天我去打酱油，竟然遇见了小明。');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'日常之酱油','阴','愉悦','今天我和小明相约去打酱油，发现酱油涨价，我和小明都惊呆了。');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'日常之逛街','晴','悲伤','今天我和小明去逛街，看见一位摔倒的老人，我准备去扶，小明眼神暗了暗，说：“你去扶了，我们一会儿拿什么钱去打酱油？”，我竟无言以对。');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'日常之作业','小雨','一般','小明告诉我酱油店老板换了，观其做派言行，怕是江湖上的退隐高人，约我前去向前辈讨教，提高下眼界，免得以后在江湖上丢脸，我说：“我SQL作业还没做完呢。”');

insert
into main(mytime,theme,weather,mood,body)
values(getdate(),'日常之离别','大雨','痛苦','小明告诉我昨天前辈只有一句话“你且下山去吧”，他顿了顿，目光如炬，而我心里却滋生了些许凉意，他目视远方，端的是一股剑客的侠气，接着说：“我等如蝼蚁，非富贵人也，竟然命贱如此，何不痛快活一回，骑最快的马，喝最烈的酒，玩最利的刀，杀最狠的人。今逢乱世，必有传奇，我心以定，你怎么了？”
我别开脸，哑声说：“你去吧，人不英雄枉少年，风沙太大，想到我SQL作业还没做好，我心里有点难过罢了。”');
