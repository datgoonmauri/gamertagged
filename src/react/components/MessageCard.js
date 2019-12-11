import React from "react";
import  {Link, DeleteMessageButton, ToggleLikeButton} from ".";
import { Card, CardBody, CardSubtitle,Form,FormGroup,FormInput,ButtonToolbar, ButtonGroup } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./MessageCard.css"


// const fakeMessage = {
//   id: 937,
//   text: "Hello World!",
//   username: "testuser",
//   createdAt: "2019-11-18T15:52:56.879Z",
//   likes: []
// };

class MessageCard extends React.Component {
  render() {
    return (
      <Card style={ { maxWidth: "30em", margin: "auto" } }>
      <CardBody>
      
          <br/>
          <Link to={`/profile/${this.props.username}`}>
            <CardSubtitle>
              { this.props.username }
              <br />
              <aside>
              <tr className="datetime" >
              Created:
              { new Date(this.props.createdAt).toLocaleTimeString()};
            </tr>
            <tr className="datetime" >
              {new Date(this.props.createdAt).toDateString()}
                </tr></aside>
            </CardSubtitle>
          </Link>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {this.props.text}
          </p>
        </CardBody>
        <Form>
          <FormGroup>
            <FormInput id="comments" placeholder="Write Something"
              style={ {
                backgroundColor: "silver",
                bordeRadius: "10px",
                boxShadow: "2px 2px 3px black",
                fontSize:"smaller"
            } } />
              <label htmlFor="#comments">Comments</label>
          </FormGroup>
        </Form>
        <ButtonToolbar><ButtonGroup vertical size="sm">
        <p>Likes: {this.props.likes.length}</p>
        <ToggleLikeButton messageId={ this.props.id } likes={ this.props.likes }/>
        <DeleteMessageButton
        username={ this.props.username }
      messageId={this.props.id}/>
      </ButtonGroup></ButtonToolbar>
        </Card>
    );
  };
};

export default MessageCard;
