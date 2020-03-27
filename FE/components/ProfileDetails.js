import {isEmpty} from 'lodash'

const ProfileDetails = ({props}) => (
  <div>
   {!isEmpty(props) ?
   <div>
     <p>Logged in as</p>
   <p>{props.name}</p>
     <img src={props.imageUrl} />

  </div> : <p>nada buey</p>}
  </div>
);

export default ProfileDetails;