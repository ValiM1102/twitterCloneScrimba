import { tweetsData } from "../js/data.js";
const tweetBtn = document.querySelector('#tweet-btn')
const tweetInput = document.querySelector('#tweet-input')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
    tweetInput.value = ''
})

function getFeedHtml(){
    let feedHtml = ''
    for (let data of tweetsData){
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${data.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${data.handle}</p>
            <p class="tweet-text">${data.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    ${data.replies.length}
                </span>
                <span class="tweet-detail">
                    ${data.likes}
                </span>
                <span class="tweet-detail">
                    ${data.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>`
    }
    return feedHtml
}
getFeedHtml()