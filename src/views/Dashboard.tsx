import ThreadCard from "../components/ThreadCard";

export default function Dashboard() {
    const DummyPost = [{
        id: 1,
        ThreadAuthorAvatar: "https://i.pravatar.cc/150?img=1",
        ThreadAuthorUsername: "John.Doe",
        ThreadAuthorUrl: "/user/john.doe",
        TheadBody: "m baby slow-carb cloud bread vexillologist viral sustainable chia franzen plaid polaroid swag hoodie schlitz lomo. Synth gochujang tacos, venmo photo booth master cleanse glossier fixie banh mi. Venmo quinoa cornhole church-key taxidermy woke kinfolk copper mug chicharrones gatekeep knausgaard +1 letterpress direct trade asymmetrical. Microdosing listicle big mood, taiyaki ethical semiotics farm-to-table hot chicken",
        ThreadReplys: "2.3k",
        ThreadPostTime: 1694336652838
    }, {
        id: 2,
        ThreadAuthorAvatar: "https://i.pravatar.cc/150?img=2",
        ThreadAuthorUsername: "John.Doe",
        ThreadAuthorUrl: "/user/john.doe",
        TheadBody: "m baby slow-carb cloud bread vexillologist viral sustainable chia franzen plaid polaroid swag hoodie schlitz lomo. Synth gochujang tacos, venmo photo booth master cleanse glossier fixie banh mi. Venmo quinoa cornhole church-key taxidermy woke kinfolk copper mug chicharrones gatekeep knausgaard +1 letterpress direct trade asymmetrical. Microdosing listicle big mood, taiyaki ethical semiotics farm-to-table hot chicken",
        ThreadReplys: "2.3k",
        ThreadPostTime: 1694329039062
    },
    {
        id: 3,
        ThreadAuthorAvatar: "https://i.pravatar.cc/150?img=2",
        ThreadAuthorUsername: "John.Doe",
        ThreadAuthorUrl: "/user/john.doe",
        TheadBody: "m baby slow-carb cloud bread vexillologist viral sustainable chia franzen plaid polaroid swag hoodie schlitz lomo. Synth gochujang tacos, venmo photo booth master cleanse glossier fixie banh mi. Venmo quinoa cornhole church-key taxidermy woke kinfolk copper mug chicharrones gatekeep knausgaard +1 letterpress direct trade asymmetrical. Microdosing listicle big mood, taiyaki ethical semiotics farm-to-table hot chicken",
        ThreadReplys: "2.3k",
        ThreadPostTime: 1694329039062
    }, {
        id: 4,
        ThreadAuthorAvatar: "https://i.pravatar.cc/150?img=2",
        ThreadAuthorUsername: "John.Doe",
        ThreadAuthorUrl: "/user/john.doe",
        TheadBody: "m baby slow-carb cloud bread vexillologist viral sustainable chia franzen plaid polaroid swag hoodie schlitz lomo. Synth gochujang tacos, venmo photo booth master cleanse glossier fixie banh mi. Venmo quinoa cornhole church-key taxidermy woke kinfolk copper mug chicharrones gatekeep knausgaard +1 letterpress direct trade asymmetrical. Microdosing listicle big mood, taiyaki ethical semiotics farm-to-table hot chicken",
        ThreadReplys: "2.3k",
        ThreadPostTime: 1694329039062
    }]
    return (
        <div className="thread-feed">
            {DummyPost.map(a => <ThreadCard key={a.id} ThreadAuthorUrl={a.ThreadAuthorUrl} ThreadAuthorAvatar={a.ThreadAuthorAvatar} ThreadAuthorUsername={a.ThreadAuthorUsername} TheadBody={a.TheadBody} ThreadReplys={a.ThreadReplys} ThreadPostTime={a.ThreadPostTime} />)}
        </div>

    )
}
