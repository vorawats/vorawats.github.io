const token_check=()=>{$.ajax({url:"/account/users/token_check",type:"GET",dataType:'json',}).done(function(res){if(res.status==503){$(`body`).html(res.data)
return}
if(res.check.trim()!=""){location.href="/account";}}).fail(function(err){});}
token_check();