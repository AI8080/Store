/*加入收藏*/
function AddFavorite(sURL, sTitle)
{
    
    sURL = encodeURI(sURL);
    try
    {
        
        window.external.addFavorite(sURL, sTitle);
        
    }
    catch (e)
    {
        
        try
        {
            
            window.sidebar.addPanel(sTitle, sURL, "");
            
        }
        catch (e)
        {
            
            alert("添加收藏失败，请手动添加！");
            
        }
        
    }
    
}
/*设为首页*/

function SetHome(url)
{
    
    if (document.all)
    {
        
        document.body.style.behavior = 'url(#default#homepage)';
        
        document.body.setHomePage(url);
        
    }
    else
    {
        
        alert("设为首页失败，请手动添加！");
        
    }
    
}
function test(){
	alert("123465");
}
