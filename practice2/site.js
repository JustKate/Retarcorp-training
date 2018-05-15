var App = {
    const: {
        PostAvatar: "{PostAvatar}",
        PostedUserName: "{PostedUserName}",
        PostText: "{PostText}",
        PostLink: "{PostLink}",
        PostCounterLiks: "{PostCounterLiks}",
        PostCounterComents: "{PostCounterComents}",
        CommentatorAvatar: "{CommentatorAvatar}",
        CommentatorName:"{CommentatorName}",
        CommentText: "{CommentText}",
        CommentatorLink: "{CommentatorLink}",
        CommentLiks: "{CommentLiks}",
        PostId: "{post_Id}",
        CommentTemplate: '<li class="list-group-item"> \
        <div class="panel panel-default">\
            <div class="panel-heading"><img src="{CommentatorAvatar}"  class="img-circle avatar" width="30" height="30">{CommentatorName}</div>\
            <div class="panel-body">\
              {CommentText}\
              <br>\
              <a href="{CommentatorLink}">User Link</a>\
              <br>\
              <button class="btn btn-xs btn-primary likeBtn_js" data="{CommentLiks}" type="button">\
                Like <span class="badge">{CommentLiks}</span\
              </button>\
            </div>\
          </div>\
      </li>',
      FormTemplate:' <li class="list-group-item">\
      Add Comment\
     <div class="form-group">\
      <label for="name">Name:</label>\
      <input type="text" class="form-control name_js" placeholder="Username" id="name">\
      <br>\
      <label for="lin">Comment link:</label>\
      <input type="text" class="form-control comm_link_js" placeholder="Link" id="lin">\
      <br>\
      <label for="ava">URL:</label>\
      <input type="text" class="form-control ava_link_js" placeholder="Avatar URL" id="ava">\
      <br>\
      <label for="comment">Comment:</label>\
      <textarea class="form-control" rows="3" id="comment"></textarea>\
      <br>\
      <button class="btn btn-success sendComment" type="button">send\
     </button>\
      </div>\
      </li>',
    
      PostTemplate: '<div class="panel panel-success post_content_js">\
      <div class="panel-heading"><img src="{PostAvatar}"  class="img-circle avatar" width="80" height="80"> {PostedUserName}</div>\
      <div class="panel-body">\
        {PostText}\
        <a href="{PostLink}">User Link</a>\
        <br>\
        <button class="btn btn-xs btn-primary likeBtn_js"data="{PostCounterLiks}" type="button">\
          Like <span class="badge">{PostCounterLiks}</span>\
        </button>\
        <button class="btn btn-xs btn-warning viewComments_js" for="{post_Id}" type="button">\
          Comments <span class="badge">{PostCounterComents}</span>\
        </button>\
      </div>\
        </div>'
    },
     loadData : async function (){
        App.loadCtalogJson.then(function(data){App.viewData(data);});
    },
    
    loadCtalogJson : new Promise(function(resolve, reject){
        var xhr=new XMLHttpRequest;
        xhr.open('GET',"catalog.json",true);
        xhr.onload=function(){
            resolve(JSON.parse(this.responseText))
           
        }
        xhr.onerror=function(){reject(this.error)};
        xhr.send(null);
    }),
    viewData : function(PostDataList){
        var divContent=document.getElementsByClassName("content")[0];
        for (post of PostDataList){
            var authorData=post.author;
            var ulComments=document.createElement("ul");
            ulComments.setAttribute("id", post.postId)
            ulComments.setAttribute("class","list-group comment-list");
            ulComments.setAttribute("hidden", true);
            var postHtml=App.const.PostTemplate.replace(App.const.PostAvatar,authorData.avatar).replace(App.const.PostedUserName,authorData.name)
            .replace(App.const.PostText,post.content).replace(App.const.PostLink,authorData.link).replace(/{PostCounterLiks}/g,post.postLiks)
            .replace(App.const.PostCounterComents,post.comments.length).replace(App.const.PostId,post.postId);   
            divContent.innerHTML+=postHtml;
            
            for(comment of post.comments){
                var comentItemHtml=App.const.CommentTemplate.replace(App.const.CommentatorAvatar, comment.imageOfCommentator)
                .replace(App.const.CommentatorName, comment.commentator).replace(App.const.CommentText, comment.text)
                .replace(App.const.CommentatorLink, comment.link).replace(/{CommentLiks}/g, comment.liks);
                ulComments.innerHTML+=comentItemHtml;
            }    
           
           ulComments.innerHTML+=App.const.FormTemplate;
           divContent.appendChild(ulComments); 
        }
        
        App.eventHendl();
    },

    viewComments: function(event){
        var postId =this.getAttribute("for");
        var commentList=document.getElementById(postId);
        commentList.hasAttribute("hidden")?commentList.removeAttribute("hidden"):commentList.setAttribute("hidden",true);
     },

     toggeLiks: function(event){
         var likeCount= parseInt(this.children[0].innerText);
         var liksFromServer=parseInt(this.getAttribute("data"));
         likeCount===liksFromServer?this.children[0].innerText=likeCount+1:this.children[0].innerText=likeCount-1;
     },

     sendComment: function(event){
         var commentForm=this.closest(".form-group").children;
         var commentList=this.closest(".comment-list").children;
         var commentListLength=commentList.length;
         var newComment=App.const.CommentTemplate;
         for(item of commentForm){
             if(item.tagName.toLowerCase()==='input'){
                item.classList.contains("name_js") ? newComment=newComment.replace(App.const.CommentatorName,item.value): null;
                item.classList.contains("comm_link_js") ? newComment=newComment.replace(App.const.CommentatorLink,item.value): null;
                item.classList.contains("ava_link_js") ? newComment=newComment.replace(App.const.CommentatorAvatar,item.value): null;
              };
             if(item.tagName.toLowerCase()==="textarea"){
               newComment=newComment.replace(App.const.CommentText,item.value);
             }
         }
         newComment=newComment.replace(/{CommentLiks}/g,"0");
        commentList[commentListLength-2].insertAdjacentHTML('beforeend', newComment);
     },
    
     init : function(){
       App.loadData();
    },

    eventHendl: function()
    {
        var viewComBtn=document.getElementsByClassName("viewComments_js");
        Array.from(viewComBtn).forEach(function(element) {
            element.addEventListener('click', App.viewComments);
          });
          
        var likeBtn=document.getElementsByClassName("likeBtn_js");
        Array.from(likeBtn).forEach(function(element) {
            element.addEventListener('click', App.toggeLiks);
          });

        var sendCommBtn=document.getElementsByClassName("sendComment"); 
        Array.from(sendCommBtn).forEach(function(element) {
            element.addEventListener('click', App.sendComment);
          });
    }
}

App.init();
