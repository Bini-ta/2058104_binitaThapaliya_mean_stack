//alert("welcome to ex
function addProject(){
    projectList = JSON.parse(sessionStorage.getItem("projects")) || [];
    clientName=document.getElementById(client).value;
    ProjectName=document.getElementById(client).value;
    BudgetName=document.getElementById(client).value;
    project={clientName:clientName,ProjectName: ProjectName,Budget:Budget}
    projectlist.push(project)
    sessionStorage.getItem("projects",JSON.stringify(projectlist));
}