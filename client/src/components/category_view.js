// CategoryView.js
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'

const CategoryView = props => {
  function renderSubcategories(sections) {
    return _.map(sections, section => {

      //var section_data = this.state.data.length != 0 ? this.state.data[0] : {};
      const REDIRECT_URL = `${props.location.state.data.category}/${section.title}`;

      return (

        <Link to={{ pathname: REDIRECT_URL, state: { data: section } }} style={{ color:"black", textDecoration: 'none' }}>
          <Card style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title>{section.title}</Card.Title>
              <Card.Text>
                 This is a wider card with supporting text below as a natural lead-in to
                 additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Link>

      );
    });
  }

  console.log("PROPS LOCATION STATE")
  console.log(props.location.state)
  console.log(props.location.state.data.subcategories)
  return (
    <div>
      <h2>{props.location.state.data.category}</h2>
      <CardDeck> {renderSubcategories(props.location.state.data.sections)} </CardDeck>
    </div>
  );
};


// var section_data = this.state.data.length != 0 ? this.state.data[0] : {};
// const REDIRECT_URL = `${category.name}`;
//
// return (
//   <Link to={{ pathname: REDIRECT_URL, state: { data: section_data } }}>
//     <ListGroup.Item key={category.name}>
//       {/* <Link to={`/posts/${post.id}`}> */}
//       <img
//         alt=""
//         src={icon}
//         width="40"
//         height="40"
//         className="d-inline-block align-top"
//       />
//       <p>{category.name}</p>
//     </ListGroup.Item>
//   </Link>
// );




CategoryView.propTypes = {
  // name: PropTypes.string.isRequired,
  //
  // subcategories: PropTypes.arrayOf(PropTypes.shape({
  //    title: PropTypes.string.isRequired,
  //  })).isRequired,
  // categoryName: PropTypes.string,
  //<h2>{props.location.state.data}</h2>
  //{renderSubcategories(props.subcategories)}
};

CategoryView.defaultProps = {
  categoryName: ""
};

export default CategoryView;
