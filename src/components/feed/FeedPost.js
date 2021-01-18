import React from 'react';
import { useFeedPostStyles } from '../../styles';
import UserCard from '../shared/UserCard';
import {
  CommentIcon,
  MoreIcon,
  ShareIcon,
  UnlikeIcon,
  LikeIcon,
  RemoveIcon,
  SaveIcon,
} from '../../icons';
import { Link } from 'react-router-dom';
import {
  Button,
  Hidden,
  Typography,
  Divider,
  TextField,
} from '@material-ui/core';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import FollowSuggestions from '../shared/FollowSuggestions';
import OptionsDialog from '../shared/OptionsDialog';
import { formatDateToNow } from '../../utils/formatDate';
import Img from 'react-graceful-image';
import {
  SAVE_POST,
  UNSAVE_POST,
  LIKE_POST,
  UNLIKE_POST,
  CREATE_COMMENT,
} from '../../graphql/mutations';
import { GET_FEED } from '../../graphql/queries';
import { useMutation } from '@apollo/react-hooks';
import { UserContext } from '../../App';

function FeedPost({ post, index }) {
  const classes = useFeedPostStyles();
  const [showCaption, setCaption] = React.useState(false);
  const [showOptionsDialog, setOptionsDialog] = React.useState(false);
  const {
    id,
    media,
    likes,
    likes_aggregate,
    saved_posts,
    location,
    user,
    caption,
    comments,
    comments_aggregate,
    created_at,
  } = post;
  const showFollowSuggestions = index === 1;
  const likesCount = likes_aggregate.aggregate.count;
  const commentsCount = comments_aggregate.aggregate.count;

  return (
    <>
      <article
        className={classes.article}
        style={{ marginBottom: showFollowSuggestions && 30 }}
      >
        {/* Feed Post Header */}
        <div className={classes.postHeader}>
          <UserCard user={user} location={location} />
          <MoreIcon
            className={classes.moreIcon}
            onClick={() => setOptionsDialog(true)}
          />
        </div>
        {/* Feed Post Image */}
        <div>
          <Img src={media} alt="Post media" className={classes.image} />
        </div>
        {/* Feed Post Buttons */}
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton likes={likes} postId={id} authorId={user.id} />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton savedPosts={saved_posts} postId={id} />
          </div>
          <Typography className={classes.likes} variant="subtitle2">
            <span>{likesCount === 1 ? '1 like' : `${likesCount} likes`}</span>
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`}>
              <Typography
                variant="subtitle2"
                component="span"
                className={classes.username}
              >
                {user.username}
              </Typography>
            </Link>
            {showCaption ? (
              <Typography
                variant="body2"
                component="span"
                dangerouslySetInnerHTML={{ __html: caption }}
              />
            ) : (
              <div className={classes.captionWrapper}>
                <HTMLEllipsis
                  unsafeHTML={caption}
                  className={classes.caption}
                  maxLine="0"
                  ellipsis="..."
                  basedOn="letters"
                />
                <Button
                  className={classes.moreButton}
                  onClick={() => setCaption(true)}
                >
                  more
                </Button>
              </div>
            )}
          </div>
          <Link to={`/p/${id}`}>
            <Typography
              className={classes.commentsLink}
              variant="body2"
              component="div"
            >
              View all {commentsCount} comments
            </Typography>
          </Link>
          {comments.map((comment) => (
            <div key={comment.id}>
              <Link to={`/${comment.user.username}`}>
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.commentUsername}
                >
                  {comment.user.username}
                </Typography>{' '}
                <Typography variant="body2" component="span">
                  {comment.content}
                </Typography>
              </Link>
            </div>
          ))}
          <Typography color="textSecondary" className={classes.datePosted}>
            {formatDateToNow(created_at)}
          </Typography>
        </div>
        <Hidden xsDown>
          <Divider />
          <Comment />
        </Hidden>
      </article>
      {showFollowSuggestions && <FollowSuggestions />}
      {showOptionsDialog && (
        <OptionsDialog
          authorId={user.id}
          postId={id}
          onClose={() => setOptionsDialog(false)}
        />
      )}
    </>
  );
}

function LikeButton({ likes, postId, authorId }) {
  const classes = useFeedPostStyles();
  const { currentUserId, feedIds } = React.useContext(UserContext);
  const isAlreadyLiked = likes.some(({ user_id }) => user_id === currentUserId);
  const [liked, setLiked] = React.useState(isAlreadyLiked);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;
  const onClick = liked ? handleUnlike : handleLike;
  const [likePost] = useMutation(LIKE_POST);
  const [unlikePost] = useMutation(UNLIKE_POST);
  const variables = {
    postId,
    userId: currentUserId,
    profileId: authorId,
  };

  function handleUpdate(cache, result) {
    const variables = { limit: 2, feedIds };
    const data = cache.readQuery({
      query: GET_FEED,
      variables,
    });
    // console.log({ result, data });
    const typename = result.data.insert_likes?.__typename;
    const count = typename === 'likes_mutation_response' ? 1 : -1;
    const posts = data.posts.map((post) => ({
      ...post,
      likes_aggregate: {
        ...post.likes_aggregate,
        aggregate: {
          ...post.likes_aggregate.aggregate,
          count: post.likes_aggregate.aggregate.count + count,
        },
      },
    }));
    cache.writeQuery({ query: GET_FEED, data: { posts } });
  }

  function handleLike() {
    //console.log('like');
    setLiked(true);
    likePost({ variables, update: handleUpdate });
  }

  function handleUnlike() {
    //console.log('unlike');
    setLiked(false);
    unlikePost({ variables, update: handleUpdate });
  }

  return <Icon className={className} onClick={onClick} />;
}

function SaveButton({ postId, savedPosts }) {
  const classes = useFeedPostStyles();
  const [saved, setSaved] = React.useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;

  function handleSave() {
    console.log('save');
    setSaved(true);
  }

  function handleRemove() {
    console.log('remove');
    setSaved(false);
  }

  return <Icon className={classes.saveIcon} onClick={onClick} />;
}

function Comment() {
  const classes = useFeedPostStyles();
  const [content, setContent] = React.useState('');

  return (
    <div className={classes.commentContainer}>
      <TextField
        fullWidth
        value={content}
        placeholder="Add a comment..."
        multiline
        rowsMax={2}
        row={1}
        onChange={(event) => setContent(event.target.value)}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline,
          },
        }}
      />
      <Button
        color="primary"
        className={classes.commentButton}
        disabled={!content.trim()}
      >
        Post
      </Button>
    </div>
  );
}

export default FeedPost;
