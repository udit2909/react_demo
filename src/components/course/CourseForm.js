import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = (props) => {
  return (
    <form>
      <h1>Manage Courses</h1>
      <TextInput
      name = "title"
      label = "title"
      value = {props.course.title}
      onChange = {props.onChange}
      error = {props.error}
      />

      <SelectInput
      name = "author"
      label = "author"
      value = {props.allAuthors.authorId}
      defaultOption = "Select Author"
      options = {props.allAuthors}
      onChange = {props.onChange}
      error = {props.error}
      />

      <TextInput
      name = "category"
      label = "category"
      value = {props.course.category}
      onChange = {props.onChange}
      error = {props.error}
      />

      <TextInput
      name = "length"
      label = "length"
      value = {props.course.length}
      onChange = {props.onChange}
      error = {props.error}
      />

      <input
      type="submit"
      disabled = {props.saving}
      value = {props.saving ? 'Saving...' : 'Save'}
      className = "btn btn-primary"
      onClick = {props.onSave}
      />
    </form>
  );
};

export default CourseForm;
