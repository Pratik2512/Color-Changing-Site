//    function changeColor(){
    //        var page= document.getElementById("full");
    //        var col = document.getElementById("color");
    //         var selcol = col.value;
    //         console.log(selcol);
    //         page.style.backgroundColor = selcol;
            
    //     }
    //     setInterval(changeColor,0);


    
    // var status;
    // document.getElementById("one").addEventListener("click", function(event) {
    // status = event.target.id;
    // });
    // document.getElementById("two").addEventListener("click", function(event) {
    // status = event.target.id;
    // });
    // document.getElementById("three").addEventListener("click", function(event) {
    // status = event.target.id;
    // });

        // document.querySelectorAll(".my-button").forEach(function(element){
        //     element.addEventListener("click", function(event){
        //         status = event.target.id;
        //     });
        // });

        // var buttons = document.getElementsByClassName("my-button");

        // for(var i=0; i < buttons.length; i++){
        //     buttons[i].addEventListener("click", function(event){
        //         status = event.target.id;
        //     });
        // }
    

        function changeCc(val){
           var page= document.getElementById("full");
           var req = document.getElementById("dropdown-content");
           var rer = document.getElementById("side-tab");
        //    var col = document.getElementById("color");
            var selcol = val;
            // console.log(selcol);
            page.style.backgroundColor = selcol;
            req.style.display = "none";
            rer.style.display = "none";

            if (val == "#ff6980"){
            document.getElementById("status").innerHTML = "Last Selected: Red Background";
            }
            if (val == "#69ff8e"){
            document.getElementById("status").innerHTML = "Last Selected: Green Background";
            }
            if (val == "#e9ff69"){
            document.getElementById("status").innerHTML = "Last Selected: Yellow Background";
            }
            
        }

        function change(){
            var req = document.getElementById("dropdown-content");
            var rer = document.getElementById("side-tab");
            if(req.style.display == "block" || rer.style.display == "block"){
                req.style.display = "none";
                rer.style.display = "none"; //adding this and the or in if closes the side tab too if it is block
            }
            else
                req.style.display = "block";
        }
        function change1(){
            var res = document.getElementById("ab");
            res.style.display = "block";
            document.getElementById("status").innerHTML = "Last Selected: About";
            
        }
        function change2(){
            var req = document.getElementById("dropdown-content");
            var rer = document.getElementById("side-tab");
            var res = document.getElementById("ab");
            if(req.style.display == "block"){
                res.style.display = "none";
                req.style.display = "none";
                rer.style.display = "none";
            }
            else 
                res.style.display = "none";
        }
        function show(){
            var ret = document.getElementById("msg");
            var reu = document.getElementById("b");

            // ret.style.display = "none"; //the display takes one click to store i.e on clicking 
            // show msg at first the last selected changes to hide msg
            if (ret.style.display === "none"){
                reu.innerHTML = "Hide Message    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^S";
                ret.style.display = "block";
                document.getElementById("status").innerHTML = "Last Selected: Show Message";
            }
            else {
                ret.style.display = "none";
                reu.innerHTML = "Show Message &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^S";
                document.getElementById("status").innerHTML = "Last Selected: Hide Message";
            }

        }
        function reset(){
            document.getElementById("status").innerHTML = "Last Selected: Reset Message";
            document.getElementById("msg").style.display = "none";
            document.getElementById("b").innerHTML = "Show Message &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^S";
        }

        function disp(){
            var req = document.getElementById("side-tab");
            if(req.style.display == "block")
                req.style.display = "none";
            else
                req.style.display = "block"
        }
        
        function changeStatus(){
            var status = document.getElementById("status");
            var drop = document.getElementById("dropdown");
                if(dropdown.value == "About")
                    status.document.write("Last Selected: About");
                else if(dropdown.value == "Show Message")
                    status.innerHTML = "Last Selected: Show Message";
                else if(dropdown.value == "resetMsg")
                    status.innerHTML = "Last Selected: Reset Message";
                else if(dropdown.value == "bgColor")
                    status.innerHTML = "Last Selected: About";
        }