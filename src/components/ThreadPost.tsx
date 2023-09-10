import TimeAgo from "javascript-time-ago";


export default function ThreadPost({  ThreadAuthorAvatar, ThreadAuthorUsername, TheadBody,ThreadReplys ,ThreadAuthorUrl,ThreadPostTime} : ThreadPost) {
   const timeAgo = new TimeAgo('en-US')

    return (
        <div className="thread">
            <div className="inline-flex avatar">
                <img className="" src={ThreadAuthorAvatar} alt="" />
                <span className="person-add">+</span>
            </div>
            <div className="thread-upper">
                <a href={ThreadAuthorUrl} className="thread-upper-username">{ThreadAuthorUsername}</a>
                <div className="">
                    <p className="thread-upper-timeago">{timeAgo.format(ThreadPostTime)}</p>
                </div>
            </div>
            <div className="thread-border"></div>
            <div className="thread-content">
                <p className="thread-text">
                    {TheadBody}
                    </p>
                <div className="thread-buttons">
                    <i className="thread-button fa-regular fa-heart"></i>
                    <i className="thread-button fa-regular fa-comment"></i>
                    <i className="thread-button fa-solid fa-arrows-rotate"></i>
                    <i className="thread-button fa-solid fa-paper-plane"></i>
                </div>
            </div>
            <div className="reply-avatar">
            </div>
            <div className="comments-bar"><span className="inline-flex gap-8">
                <a href="">{ThreadReplys} replies</a>
                <span>-</span>
                <a href="">View likes</a>
            </span></div>
        </div>
    )
}


export interface ThreadPost {
    ThreadAuthorAvatar: string;
    ThreadAuthorUsername: string;
    ThreadAuthorUrl: string;
    TheadBody: string;
    ThreadReplys: string;
    ThreadPostTime: number;
}
