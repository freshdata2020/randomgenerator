document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"</ul>";

function nameW() {
                
        v=['a','e','i','o','u','y','au','ia','io','oo','oa','oy'];
        f=['B','C','D','F','G','H','J','K','L','M','N','P','Qu','R','S','T','V','W','X','Z','Bl','Br','Cl','Ch','Cr','Dr','Fr','Fl','Gr','Gl','Pr','Pl','Sc','Sh','Sk','Sl','Sm','Sn','Sp','St','Sw','Tr','Th','Wr'];
        c=['b','c','d','f','g','h','j','k','l','m','n','p','qu','r','s','t','v','w','x','z','bl','br','cl','ch','cr','dr','fr','fl','gr','gl','pr','pl','sc','sh','sk','sl','sm','sn','sp','st','sw','tr','th','wr'];
        l=['b','ck','d','f','g','h','j','l','m','n','p','r','s','t','v','x','z','ch','sh','sk','st','th','nd','ws','rt'];

        s=Math.round(Math.random()*2);
        e=Math.round(Math.random()*1);

        name1=f[Math.round(Math.random()*43)];
        name1=name1 + v[Math.round(Math.random()*11)];
        for(j=1;j<=s;j++){
          name1=name1 + c[Math.round(Math.random()*43)];
          name1=name1 + v[Math.round(Math.random()*11)];
        };
        if(e==1){name1=name1 + l[Math.round(Math.random()*24)]};
        document.getElementById("name01").innerHTML = name1;
    };

