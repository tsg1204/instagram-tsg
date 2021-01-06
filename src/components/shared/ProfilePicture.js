import React from 'react';
import { useProfilePictureStyles } from '../../styles';
import { Person } from '@material-ui/icons';
import post_media from '../../images/post_media.png';

function ProfilePicture({ size, image = post_media, isOwner }) {
  const classes = useProfilePictureStyles({ size, isOwner });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="user profile" className={classes.image} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person className={classes.person} />
        </div>
      )}
    </section>
  );
}

export default ProfilePicture;
