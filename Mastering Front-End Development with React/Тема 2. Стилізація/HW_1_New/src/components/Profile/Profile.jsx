import css from "./Profile.module.css";

// function Profile(props) {
//   return (
//     <div>
//       <div>
//         <img src={props.image} alt="User avatar" />
//         <p>{props.name}</p>
//         <p>{props.tag}</p>
//         <p>{props.location}</p>
//       </div>

//       <ul>
//         <li>
//           <span>Followers</span>
//           <span>{props.stats.followers}</span>
//         </li>
//         <li>
//           <span>Views</span>
//           <span>{props.stats.views}</span>
//         </li>
//         <li>
//           <span>Likes</span>
//           <span>{props.stats.likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Profile;

function Profile({
  image,
  name,
  tag,
  location,
  stats: { followers, likes, views },
}) {
  return (
    <div className={css.container}>
      <div className={css.description}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
