// SubcategoryView.js
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const SubcategoryView = props => {
  // function renderListSections(sections) {
  //   return _.map(sections, section => {
  //     return (
  //       <ul>
  //         <h1>{section.title}</h1>
  //         <p> {section.content}</p>
  //       </ul>
  //     );
  //   });
  // }

  console.log("PROPS LOCATION STATE (SUB)")
  console.log(props.location.state)
  return (
    <div>
      <h1>{props.location.state.data.title}</h1>
      <h2>{props.location.state.data.content}</h2>
    </div>
  );
};

SubcategoryView.propTypes = {
  // sections: PropTypes.arrayOf(PropTypes.shape({
  //    title: PropTypes.string.isRequired,
  //    content: PropTypes.string.isRequired,
  //  })).isRequired,
  // categoryName: PropTypes.string,
};

SubcategoryView.defaultProps = {
  categoryName: ""
};

export default SubcategoryView;
