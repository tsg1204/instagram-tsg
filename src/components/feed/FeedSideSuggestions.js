import React from "react";
import { useFeedSideSuggestionsStyles } from "../../styles";
import { Paper, Typography } from "@material-ui/core";
import UserCard from "../shared/UserCard";
import { getDefaultUser } from '../../data';
import FollowButton from '../shared/FollowButton';
import { LoadingIcon } from '../../icons';

function FeedSideSuggestions() {
  const classes = useFeedSideSuggestionsStyles();
  let loading = false;

  return (
    <article>
      <Paper>
        <Typography color="textSecondary" variant="subtitle2" component="h2" align="left" gutterBottom className={classes.typography}>
          Suggestions For You
        </Typography>
        {loading ? (
          <LoadingIcon />
        ) :
          Array.from({ length: 5}, () => getDefaultUser()).map(user => (
          <div key={user.id} className={classes.card}>
            <UserCard user={user} />
            <FollowButton side />
          </div>
        ))}
      </Paper>
    </article>
  )
}

export default FeedSideSuggestions;
