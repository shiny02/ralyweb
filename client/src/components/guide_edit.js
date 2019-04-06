// GuideEdit.js
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const GuideEdit = props => {

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

  return (
    <form onSubmit={/*save function*/}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={props.section_title}
        onChange={/*handleChange function*/}
      />
      //<input type = "text" value = {props.section_title} onChange
      <textarea
        type="text"
        name="body"
        placeholder="Edit"
        value={props.section_content}
        onChange={/*handleChange function*/}
      />
      <button type="submit">Submit</button>
      <button onClick={/*delete button */}>Delete</button>
    </form>
  );
}


GuideEdit.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // handleChangeText: PropTypes.func.isRequired,
  section_id: PropTypes.string,
  section_title: PropTypes.string,
  section_content: PropTypes.string,
};

GuideEdit.defaultProps = {
  section_id: '',
  section_title: '',
  section_content: '',
};

export default GuideEdit;
