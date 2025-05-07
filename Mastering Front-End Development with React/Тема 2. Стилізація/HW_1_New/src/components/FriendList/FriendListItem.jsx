function FriendListItem(props) {
  return (
    <div>
      <img src={props.avatar} alt="Avatar" width="48" />
      <p>{props.name}</p>
      {props.isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
}

export default FriendListItem;
