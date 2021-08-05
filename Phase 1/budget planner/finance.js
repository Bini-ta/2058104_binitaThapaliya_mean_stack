getProject = () => {
     projects = JSON.parse(sessionStorage.getItem("projects"));
    let tableContent = ""
    const startTable = "<table border=1 cellpadding=3 class='table'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"
    let totalBudget = 0;
    for(i = 0;  i < projects.length; i++) {
        var clientName = projects[i].ClientName
        var projectName = projects[i].ProjectName
        var budget = projects[i].Budget
        if (clientName != "" && projectName != "" && budget != "") {
            totalBudget += parseInt(budget);

  
                    totalBudget += parseInt(budget);
                    tableContent += "<tr><td>" + cName + "</td><td>" + pName + "</td><td>" + budget + "</td></tr>"
                }
            }

    const end = "</table>"
    tableContent = startTable + tableContent + end
    document.getElementById("budgetInfo").innerHTML = tableContent;
    document.getElementById("budgetTotal").innerHTML = "<br><h3>Total budget is " + totalBudget + "</h3>";

}