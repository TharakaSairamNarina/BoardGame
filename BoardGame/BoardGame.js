// 9x12 matrix for board
var items = [[0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,0],   
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0]];
var arr=[8,0];






// creating board ramdomly..
var i,j,a=2;
var x=8,y=0;
for(i=8;i>0;){
    for(j=0;j<10;){
        var n = Math.floor(Math.random() *3)+1;
        //To move Top
        if(n==1 && x>0 && items[x-1][y]==0){   
            i--;
            x--;
            items[x][y]=a;
            arr.push(x);
            arr.push(y);
            a++;
            break;   
        }
        //To move Right
        else if(n==2 && y<10 && items[x][y+1]==0){
            j++;
            y++;
            items[x][y]=a;
            arr.push(x);
            arr.push(y);
            a++;
            break;
        }
        //To move Left
        else if(n==3 && y>0 && x>0 && items[x][y-1]==0){
            y--;
            j--;
            items[x][y]=a;
            arr.push(x);
            arr.push(y);
            a++;
            break;
        }
        else{
            i=i;
            j=j;
        }
    }
}
while(x!= 0){
    x--;
    items[x][y]=a;
    arr.push(x);
    arr.push(y);
    a++;
}
while(y<10){
    y++;  
    items[x][y]=a;
    arr.push(x);
    arr.push(y);
    a++;
}








items[8][0]=1;
items[0][10]=a-1;





//Generates Route for the destination
var count = 1;
while (count <= 108){
    for(i=0;i<=8;i++){
        for(j=0;j<=10;j++){
            ids=''+i+j;
            if (count % 12  == 0 && count !=0){
                document.write('<div id="c2"></div>');
                count++;
            }
            if(items[i][j]!=0 && items[i][j]!=1 && items[i][j]!=a-1 && count<=108){
                if(i<=7 && Math.abs(items[i][j]-items[i+1][j])==1){
                    if(j<=9 && Math.abs(items[i][j]-items[i][j+1])==1){
                        document.write('<div id= '+ids+' class="cell11" ></div>');
                        count++;
                    }
                    else if(j>=1 && Math.abs(items[i][j]-items[i][j-1])==1){
                        document.write('<div id= '+ids+' class="cell12" ></div>');
                        count++;
                    }
                    else if(i>=1 && Math.abs(items[i][j]-items[i-1][j])==1){
                        document.write('<div id= '+ids+' class="cell13" ></div>');
                        count++;
                    }
                }
                else if(i>=1 && Math.abs(items[i][j]-items[i-1][j])==1){
                    if(j>=1 && Math.abs(items[i][j]-items[i][j-1])==1){
                        document.write('<div id= '+ids+' class="cell21" ></div>');
                        count++;
                    }
                    else if(j<=9 && Math.abs(items[i][j]-items[i][j+1])==1){
                        document.write('<div id= '+ids+' class="cell22" ></div>');
                        count++;
                    }
                }
                else if(j<=9 && Math.abs(items[i][j]-items[i][j+1])==1){
                    if(j>=1 && Math.abs(items[i][j]-items[i][j-1])==1){
                        document.write('<div id= '+ids+' class="cell31" ></div>');
                        count++;   
                    }
                    else if(i<=7 && Math.abs(items[i][j]-items[i+1][j])==1){
                        document.write('<div id= '+ids+' class="cell32" ></div>');
                        count++;   
                    }
                }
            } 
            else if((items[i][j]==1||items[i][j]==a-1) && count<=108){
                if(items[i][j]==1){
                    document.write('<div id= '+ids+' class="dup" ></div>');
                    count++;
                }
                else{
                    document.write('<div id= '+ids+' class="dup1" ></div>');
                    count++;
                }
            }
            else if(count<=108){
                document.write('<div id= '+ids+' class="ground" ></div>');
                count++;
            }
        }
    }
}







var position1=-1,position2=-1;
var prefix1=0,prefix2=0;

var num1=0;
var num2=0;
var n,m;
var r,s;
document.getElementById(''+'80').innerHTML="START";
document.getElementById(''+'010').innerHTML="HOME";
function coinposition1(){
    var i=1
    var val=rolldice(i);
    position1 = position1+val;
    var n = Math.floor(Math.random() * 60);
    var ans= prompt(questions[n]).toLowerCase();
    if(ans==answers[n]){
        alert("GREAT! YOUR ANSWER WAS CORRECT");
        if(position1<a-1){
            document.getElementById(''+arr[(position1)*2]+arr[(position1*2)+1]).style.backgroundColor='blue';
            document.getElementById(''+arr[(position1)*2]+arr[(position1*2)+1]).innerHTML="P1"
            if(position1==position2){
                document.getElementById(''+arr[(position1)*2]+arr[(position1*2)+1]).style.backgroundColor='orange';
                document.getElementById(''+arr[(position1)*2]+arr[(position1*2)+1]).innerHTML="P1"
            }
            if(num1>0){
                document.getElementById(''+arr[prefix1*2]+arr[(prefix1*2)+1]).style.backgroundColor= "aliceblue"; 
                if(num1==1&&prefix1==0){
                    document.getElementById(''+arr[prefix1*2]+arr[(prefix1*2)+1]).style.backgroundColor= "red";
                    document.getElementById(''+arr[(prefix1)*2]+arr[(prefix1*2)+1]).innerHTML="START"
                }
            }
            if(num1>0 && position2==position1-val){
                document.getElementById(''+arr[(position2)*2]+arr[(position2*2)+1]).style.backgroundColor='yellow';
                document.getElementById(''+arr[(position2*2)]+arr[(position2*2)+1]).innerHTML="P2"
            } 
            num1++;
            prefix1=position1;
        }
        else{
            alert("YOUR DICE SCORE IS GREATER THAN REQURIED SCORE");
            position1-=val;
        }
        checkwin(position1);
    }
    else {
        alert("SORRY YOUR ANSWER IS WRONG\n PLEASE TRY AGAIN :(");
        position1-=val;
    }
}

function coinposition2(){
    var i=2;
    var val=rolldice(i);
    position2 = position2+val;
    var n = Math.floor(Math.random() * 60);
    var ans= prompt(questions[n]).toLowerCase();
    if(ans==answers[n]){
        alert("GREAT! YOUR ANSWER WAS CORRECT :)");
        if(position2<a-1){
            document.getElementById(''+arr[(position2)*2]+arr[(position2*2)+1]).style.backgroundColor='yellow';
            document.getElementById(''+arr[(position2)*2]+arr[(position2*2)+1]).innerHTML="P2"
            if(position1==position2){
                document.getElementById(''+arr[(position1)*2]+arr[(position1*2)+1]).style.backgroundColor='orange';
                document.getElementById(''+arr[(position1)*2]+arr[(position1*2)+1]).innerHTML="P1&P2"
            }
            if(num2>0){
                document.getElementById(''+arr[prefix2*2]+arr[(prefix2*2)+1]).style.backgroundColor= "aliceblue";
                if(num2==1&&prefix2==0){
                    document.getElementById(''+arr[prefix2*2]+arr[(prefix2*2)+1]).style.backgroundColor= "red";
                    document.getElementById(''+arr[(prefix2)*2]+arr[(prefix2*2)+1]).innerHTML="START"
                } 
            }
            if(num2>0 && position1==position2-val){
                document.getElementById(''+arr[(position1)*2]+arr[(position1*2)+1]).style.backgroundColor='black';
                document.getElementById(''+arr[(position1)*2]+arr[(position1*2)+1]).innerHTML="P1"
            } 
            num2++;
            prefix2=position2;
        }
        if(position2>a-1){
            alert("YOUR DICE SCORE IS GREATER THAN REQURIED SCORE");
            position2-=val;
        }
        checkwin(position2);
    }
    else {
        alert("SORRY YOUR ANSWER IS WRONG\n PLEASE TRY AGAIN :(");
        position2-=val;
    }
}

function rolldice(i) {
    var value= Math.floor( Math.random() * 4) +1;
    var str=value.toString();
    var res=str.fontsize(25);
    if(i==1){
        //reverse of score board.
        document.getElementById("score1").innerHTML  = res;
    }
    else{
        document.getElementById("score2").innerHTML  = res;
    }
    return value;
}
// winning condition    
function checkwin(position){
    if(position==a-2){
        var res=alert("PLAYER WON THE GAME");
    }
}








var questions=["Inside which HTML element do we put the JavaScript ____________ .",
                "Which protocol is supported by Android browsers _____________.",
                " Which tag is used for List items ___________.",
                "Which element contains definition ___________.",
                "Which attribute is only used with <ol> ____________.",
                " Which element was designed for creating multicolumn directory lists ___________.",
                "which tag is used for bold letters ___________.",
                "In HTML5 which element defines thematic change in the content ______________.",
                "Which element defines preformatted text ___________.",
                "Which element is used for creating links _____________.",
                " Relative URLs are used to _____________.",
                "How many standard color names does HTML supports ___________.",
                "Which works similar to <i> element _________.",
                "Which works similar to <i> element ___________.","Which element is used for short quote __________.",
                "Which element is used for abbreviation or acronym _________",
                "What is the new format to display vector images __________.",
                "Which format can create a transparent image ____________.",
                "Vector images are created in ___________.",
                "Which attribute is used to link the bookmark ___________.",
                "What is used for specifying an email to be sent _____________.",
                "Bootstrap was first introduced in __________.",
                "Variable element is __________.",
                "Which element embeds a Java applet into the document _________.",
                "Which element represents an external resource _________.",
                "Which element represents a dialog box _________.",
                "Which element is used to show the text slowly ___________.",
                "Which element is used as a container for a directory of files ____________.",
                " For background sound obsolete element was __________.",
                "Where is the correct place to insert a JavaScript ___________.",
                "How do you write hello world in an alert box(use ` as cotes)",
                "How do you create a function in JavaScript __________.",   
                "How do you call a function named `myFunction`",
                "How can you add a comment in a JavaScript __________.",
                "How to insert a comment that has more than one line ___________.",
                "#000000 is __________ color",
                "rgb(255,255,255) os ___________ color",
                "How to insert a comment that has more than one line ____________.(true/flase)",
                "How do you declare a JavaScript variable __________.",
                "Which operator is used to assign a value to a variable ____________.",
                "What is the correct HTML element for inserting a line break ____________.",
                "Choose the correct HTML element to define emphasized text ___________.",
                "Which character is used to indicate an end tag __________."
                ,"How can you make a ordered list",
                "How can you make a unordered list","HTML comments start with <!-- and end with -->(true/false)",
                "Which HTML element defines the title of a document _________________.",
                "Where in an HTML document is the correct place to refer to an external style sheet __________.",
                "Which HTML tag is used to define an internal style sheet __________.",
                "How do you insert a comment in a CSS file __________.",
                "Which property is used to change the background color",
                "Which CSS property is used to change the text color of an element ___________.",
                "How do you select an element with id `demo`",
                "How do you select an element with class `demo`",
                "Which of the following is the first web browser",
                "var arr[1,2,3,4] then arr[1] = ________.",
                "which function returns numbers between 0 and 1 ______.",
                "h1,h2,h3,..... are called _________",
                "p refers to _________.",
                "which html element defines italic text __________."];


// answers
var answers=["script","https","li","dd","start","dir","strong","hr","pre","a","link pages","140","em","strong","q","abbr","svg","png",
"adobe illustrator","href","mailto:","twitter","var","applet","object","dialog","blink","dir","bgsound","both","alert(`hello world`)",
"function=myfunction()","myfunction()","//","/* */","black","white","false","var variablename","=","br","em","/","ol","ul","true","tittle",
"head","style","/* */","background-color","color","#demo",".demo","nexus","2","random","heading","paragraph","i"];
