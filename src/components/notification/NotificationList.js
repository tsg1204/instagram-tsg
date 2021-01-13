import React from 'react';
import { useNotificationListStyles } from '../../styles';
//import { defaultNotifications } from '../../data';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FollowButton from '../shared/FollowButton';
import useOutsideClick from '@rooks/use-outside-click';

function NotificationList({ handleHideList, notifications }) {
  const listContainerRef = React.useRef();
  const classes = useNotificationListStyles();
  useOutsideClick(listContainerRef, handleHideList);

  return (
    <Grid ref={listContainerRef} className={classes.listContainer} container>
      {notifications.map((notification) => {
        const isLike = notification.type === 'like';
        const isFollow = notification.type === 'follow';

        return (
          <Grid key={notification.id} item className={classes.listItem}>
            <div className={classes.listItemWrapper}>
              <div className={classes.avatartWrapper}>
                <Avatar
                  src={notification.user.profile_image}
                  alt="User Avatar"
                />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`}>
                  <Typography variant="body1">
                    {notification.user.username}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  {isLike && `likes your photo. ${notification.created_at}`}
                  {isFollow &&
                    `started following you. ${notification.created_at}`}
                </Typography>
              </div>
            </div>
            <div>
              {isLike && (
                <Link to={`/p/${notification.post.id}`}>
                  <Avatar src={notification.post.media} alt="post cover" />
                </Link>
              )}
              {isFollow && <FollowButton id={notification.user.id} />}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NotificationList;
