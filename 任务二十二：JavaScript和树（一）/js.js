/**
 * Created by admin on 2016/4/2.
 */
var root=document.querySelector(".root");
var NodeList=[];
function PreOrderFun()
{
    NodeList.length=0;
    PreOrder(root);
    Show();
}
var i=0
function InOrderFun()
{
    NodeList.length=0;
    InOrder(root);
    Show();
}
function PostOrderFun()
{
    NodeList.length=0;
    PostOrder(root);
    Show();
}
function PreOrder(node)
{
    if(node!==null)
    {
        NodeList.push(node);
        PreOrder(node.firstElementChild);
        PreOrder(node.lastElementChild);
    }
}
function InOrder(node)
{
    if(node!==null)
    {
        InOrder(node.firstElementChild);
        NodeList.push(node);
        InOrder(node.lastElementChild);
    }
}

function PostOrder(node)
{
    if(node!==null)
    {
        PostOrder(node.firstElementChild);
        PostOrder(node.lastElementChild);
        NodeList.push(node);
    }
}
function Show()
{
    ResetColor();
    var i=0;
    var controller=setInterval(function()
    {
        ResetColor();
        NodeList[i].style.backgroundColor="#0086f7";
        i++;
        if(i==NodeList.length)
        {
            clearInterval(controller);
        }
    },500);
}
function ResetColor()
{
    var DivArray=document.getElementsByTagName("div");
    for(var i=0;i<DivArray.length;i++)
    {
        DivArray[i].style.backgroundColor="#FFFFFF";
    }
}