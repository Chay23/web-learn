// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    function sayHello(event){
        this.textContent = "Hello";
        var name = document.getElementById("name").value
        var message = "<h2>Hello " + name + "!</h2>";
        document.getElementById("content2").innerHTML = message;

    }
    // Unobtrusive event binding
    document.querySelector("#in2")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
      document.querySelector("#name").addEventListener("blur",sayHello);
  }
);