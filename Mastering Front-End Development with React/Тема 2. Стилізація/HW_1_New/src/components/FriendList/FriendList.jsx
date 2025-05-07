import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

// все в 1 файлі
// const FriendList = (props) => {
//   return (
//     <ul>
//       {props.friends.map((friend) => (
//         <li key={friend.id}>
//           <img src={friend.avatar} alt="Avatar" width="48" />
//           <p>{friend.name}</p>
//           {friend.isOnline ? <p>Online</p> : <p>Offline</p>}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default FriendList;
