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

        //like and retweet color switch
        let likeIconClass = ''
        if(data.isLiked){
            likeIconClass='liked'
        }
        let shareIconClass = ''
        if(data.isRetweeted){ 
            shareIconClass='retweeted'
        }
        //like and retweet color switch

        //replies
        let repliesHtml = ''
        if(data.replies.length > 0){
            data.replies.forEach(function(replies){
                repliesHtml += `
        <div class="tweet-reply hidden">
            <div class="tweet-inner">
                    <img src="${replies.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${replies.handle}</p>
                    <p class="tweet-text">${replies.tweetText}</p>
                </div>
            </div>
        </div>
                `
            })
            const hiddenReply = document.getElementsByClassName = '.hidden'
            //start from here
        }
            
        //replies

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
                            <i class="fa-solid fa-heart ${likeIconClass}" 
                            data-like="${data.uuid}"></i>
                            ${data.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${shareIconClass}"
                            data-retweet="${data.uuid}"></i>
                            ${data.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>
    <div id="replies-${data.uuid}">
        ${repliesHtml}
    </div>   
    `
    })
    return feedHtml
    
}
   

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    } else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
})



function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    } else {
        targetTweetObj.likes++
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked

    renderFeed()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    if (targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    } else {
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted

    renderFeed()
}



function renderFeed(){
    document.querySelector('#feed').innerHTML = getFeedHtml()
}
renderFeed()