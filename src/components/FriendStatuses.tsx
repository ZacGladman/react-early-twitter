import StatusItem from "./StatusItem";

function FriendStatuses(): JSX.Element {
  return (
    <section>
      <h2>friend's status</h2>
      <a href="#">add more friends</a>
      <ol>
        <StatusItem
          username={"jack"}
          content={"wondering when Mer is going to show up"}
          timeAgo={{ n: 5, unit: "minutes" }}
        />
        <StatusItem
          username={"Dom"}
          content={"who's johnny, he says"}
          emoji={"⭐"}
          timeAgo={{ n: 15, unit: "minutes" }}
        />
        <StatusItem
          username={"ev"}
          content={"so excited about new odeo ideas"}
          emoji={"⭐"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"Tony Stubblebine"}
          content={"thinking about polyphasic sleep"}
          emoji={"◻️"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"drx"}
          content={"chatting in gmail w/Jack"}
          emoji="⭐"
          timeAgo={{ n: 31, unit: "minutes" }}
        />
        <StatusItem
          username={"biz"}
          content={"having some coffee"}
          emoji="⭐"
          timeAgo={{ n: 36, unit: "minutes" }}
        />
        <StatusItem
          username={"Florian"}
          content={"Preparing a pizza"}
          emoji="⭐"
          timeAgo={{ n: 3, unit: "hours" }}
        />
        <StatusItem
          username={"Courtney"}
          content={"multi-tasking audio debug audio coding"}
          emoji="⭐"
          timeAgo={{ n: 8, unit: "hours" }}
        />
        <StatusItem
          username={"Jack"}
          content={"having some coffee"}
          emoji="◻️"
          timeAgo={{ n: 21, unit: "hours" }}
        />
        <StatusItem
          username={"noah"}
          content={"coming down with a cold"}
          emoji="⭐"
          timeAgo={{ n: 21, unit: "hours" }}
        />
      </ol>
    </section>
  );
}

export default FriendStatuses;
