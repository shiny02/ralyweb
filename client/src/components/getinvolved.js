// GuideView.js
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const GetInvolvedPage = props => {


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
      <h1>get involved because this!</h1>
    </div>
  );
};

GetInvolvedPage.propTypes = {
  // sections: PropTypes.arrayOf(PropTypes.shape({
  //    title: PropTypes.string.isRequired,
  //    content: PropTypes.string.isRequired,
  //  })).isRequired,
  // categoryName: PropTypes.string,
};

GetInvolvedPage.defaultProps = {
  categoryName: ""
};

export default GetInvolvedPage;
