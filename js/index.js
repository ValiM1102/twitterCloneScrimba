import { tweetsData } from "../js/data.js";
const tweetBtn = document.querySelector('#tweet-btn')
const tweetInput = document.querySelector('#tweet-input')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
    tweetInput.value = ''
})

function getFeedHtml(){
    let feedHtml = ''
    tweetsData.forEach(function(data){
        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${data.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${data.handle}</p>
                    <p class="tweet-text">${data.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" 
                            data-comment="${data.uuid}"></i>
                            ${data.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart" 
                            data-like="${data.uuid}"></i>
                            ${data.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet"
                            data-retweet="${data.uuid}"></i>
                            ${data.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>`
    })
    return feedHtml
    
}
   
function renderFeed(){
    document.querySelector('#feed').innerHTML += getFeedHtml()
}
renderFeed()

document.addEventListener('click', function(e){
    if(e.target.dataset.comment){
        console.log(e.target.dataset.comment)
    } else if(e.target.dataset.like){
        console.log(e.target.dataset.like)
    } else if(e.target.dataset.retweet){
        console.log(e.target.dataset.retweet)
    }
})