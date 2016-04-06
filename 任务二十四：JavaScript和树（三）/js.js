/**
 * Created by admin on 2016/4/2.
 */
/**
 * Created by admin on 2016/4/2.
 */
var root=document.querySelector(".root");
var NodeList=[];
var type;
var index=0;
var find=false;
var selected_element=0;
function init()
{
    var select=document.getElementsByTagName("div");
    for(var i=0;i<select.length;i++)
    {
        select[i].addEventListener("click",function(e)
        {
            ResetColor();
            this.style.backgroundColor="#9DF0FD";
            selected_element=this;
            e.stopPropagation();
        })
    }
}
function Delete()
{
    if(selected_element!=0)
    {
        selected_element.remove();
    }
}
function Add()
{
    var add_type=document.getElementById("add_type").value;
    if(selected_element==0)
    {
        alert("请先选中元素")
    }
    else
    {
        if(add_type=="")
        {
            alert("请输入种类")
        }
        else
        {
            var div=document.createElement("div");
            div.className="first-child"
            selected_element.appendChild(div);
            div.innerHTML=add_type;
            init();
        }
    }
}
function PreOrderFun()
{
    type=document.getElementById("type").value;
    NodeList.length=0;
    PreOrder(root);
    Show();
}
function InOrderFun()
{
    type=document.getElementById("type").value;
    NodeList.length=0;
    InOrder(root);
    Show();
}
function PostOrderFun()
{
    type=document.getElementById("type").value;
    NodeList.length=0;
    PostOrder(root);
    Show();
}
function PreOrder(node)
{
    if(node!==null)
    {
        NodeList.push(node);
        for(var i=0;i<node.children.length;i++)
        {
            PreOrder(node.children[i]);
        }
    }
}
function InOrder(node)
{
    if(node!==null)
    {
        for(var i=0;i<Math.floor(node.children.length/2);i++)
        {
            InOrder(node.children[i]);
        };
        NodeList.push(node);
        for(var i=Math.floor(node.children.length/2);i<node.children.length;i++)
        {
            InOrder(node.children[i]);
        };
    }
}

function PostOrder(node)
{
    if(node!==null)
    {
        for(var i=0;i<node.children.length;i++)
        {
            PostOrder(node.children[i]);
        }
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
        if(NodeList[i].title==type)
        {
            clearInterval(controller);
            find=true;
            alert("已找到");
        }
        i++;
        if(i==NodeList.length&&!find)
        {
            clearInterval(controller);
            alert("未找到该种类");
            ResetColor();
        }
    },300);
}
function ResetColor()
{
    var DivArray=document.getElementsByTagName("div");
    for(var i=0;i<DivArray.length;i++)
    {
        DivArray[i].style.backgroundColor="#FFFFFF";
    }

}