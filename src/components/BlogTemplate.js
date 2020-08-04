import React, { Component } from './node_modules/react';
import {
  Grid,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from './node_modules/react-mdl';

class BlogTemplate extends Component {
  render() {
    return (
      <div>
        <Grid className='blog-grid'>
          <Card
            className='blog-card'
            shadow={5}
            style={{ minwidth: '220px', height: '320px', margin: 'auto' }}
          >
            <CardTitle
              expand
              style={{
                color: '#fff',
                background:
                  'url(https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg) center / cover'
                // 'url(' + this.props.img + ') center / cover'
              }}
            >
              {this.props.blogTitle}
            </CardTitle>
            <CardText>{this.props.description}</CardText>
            <CardActions border>
              <Button colored>
                {' '}
                <a href={this.props.URL}> Learn More</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default BlogTemplate;
