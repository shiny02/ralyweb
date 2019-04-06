// GuideView.js
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const GuideView = props => {
  function renderListSections(sections) {
    return _.map(sections, section => {
      return (
        <ul>
          <h1>{section.title}</h1>
          <p> {section.content}</p>
        </ul>
      );
    });
  }

  // function renderSectionEdits(edits){
  //   return _.map(edits, edit => {
  //     return (
  //       <ul>
  //        <h1>{edit.title}</h1>
  //        <p> {edit.content}</p>
  //        </ul>
  //     );
  //   });
  // }

  return (
    <div>
      <h1>{props.location.state.data.category}</h1>
      {renderListSections(props.location.state.data.sections)}
    </div>
  );
};

GuideView.propTypes = {
  // sections: PropTypes.arrayOf(PropTypes.shape({
  //    title: PropTypes.string.isRequired,
  //    content: PropTypes.string.isRequired,
  //  })).isRequired,
  // categoryName: PropTypes.string,
};

GuideView.defaultProps = {
  categoryName: ""
};

export default GuideView;
