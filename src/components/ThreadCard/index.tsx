import './ThreadCard.css';

export default function ThreadCard({
  ThreadAuthorAvatar,
  ThreadAuthorUsername,
  TheadBody,
  ThreadReplys,
  ThreadAuthorUrl,
  ThreadPostTime,
}: ThreadPostTypes) {
  return (
    <div className="thread">
      <div className="thread-card-avatar">
        <img className="" src={ThreadAuthorAvatar} alt="" />
        <div className="thread-card-avatar-add-icon">
          <svg
            aria-label="Follow"
            color="white"
            fill="white"
            height="10"
            role="img"
            viewBox="0 0 10 9"
            width="10"
          >
            <title>Follow</title>
            <path
              d="M4.99512 8.66895C4.64355 8.66895 4.35059 8.36621 4.35059 8.03418V5.12891H1.50391C1.17188 5.12891 0.864258 4.83594 0.864258 4.47949C0.864258 4.12793 1.17188 3.83008 1.50391 3.83008H4.35059V0.924805C4.35059 0.583008 4.64355 0.290039 4.99512 0.290039C5.35156 0.290039 5.64453 0.583008 5.64453 0.924805V3.83008H8.49121C8.83301 3.83008 9.13086 4.12793 9.13086 4.47949C9.13086 4.83594 8.83301 5.12891 8.49121 5.12891H5.64453V8.03418C5.64453 8.36621 5.35156 8.66895 4.99512 8.66895Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </div>
      <div className="thread-upper">
        <a href={ThreadAuthorUrl} className="thread-upper-username">
          {ThreadAuthorUsername}
        </a>
        <div className="">
          <p className="thread-upper-timeago">{ThreadPostTime}</p>
        </div>
      </div>
      <div className="thread-border"></div>
      <div className="thread-content">
        <p className="thread-text">{TheadBody}</p>
        <div className="thread-buttons">
          <i className="thread-button fa-regular fa-heart"></i>
          <i className="thread-button fa-regular fa-comment"></i>
          <i className="thread-button fa-solid fa-arrows-rotate"></i>
          <i className="thread-button fa-solid fa-paper-plane"></i>
        </div>
      </div>
      <div className="thread-reply-avatar"></div>
      <div className="thread-comments-bar">
        <span className="thread-reply-wrapper">
          <a href="">{ThreadReplys + ' '}replies</a>
          <span>-</span>
          <a href="">View likes</a>
        </span>
      </div>
    </div>
  );
}

interface ThreadPostTypes {
  ThreadAuthorAvatar: string;
  ThreadAuthorUsername: string;
  ThreadAuthorUrl: string;
  TheadBody: string;
  ThreadReplys: string;
  ThreadPostTime: number;
}
