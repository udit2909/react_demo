import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {browserHistory} from 'react-router';

class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    // The object coming from redux is created as a new for use in this.state
    // since redux is immutable.
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    }
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  // This is calles every time the props are changed. This is added because
  // if we refresh the page, it is empty because the props are coming from redux store.
  // and the store is getting updated from the ajax call which is slower than the
  // page rendering time. Due ti thie the props are empty.
  // Now as soon as props or the redux store is updated with ajax call,
  //componentWillReceiveProps is called
  componentWillReceiveProps(nextProps){
    // nextProps is the updated props that is recived adter ajax call completes
    // this.props.course are old ones
    if (this.props.course.id != nextProps.course.id){
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  // waiting for thunk to finish and get promise and redirect on reciving it.
  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState(saving: false);
    })
  }

  redirect(){
    this.setState({saving: false});
    toastr.success('Course Saved');
    browserHistory.push('/courses');
  }

  render(){
    return (
        <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        saving={this.state.saving}
      />
    );
  }
}

function getCourseById(courses, id){
  const course = courses.filter(course => course.id==id);
  if (course) return course[0];
  return null;
}

// ownProps has routing related props that are passed by react router
// during defining the routes

function mapStateToProps(state, ownProps){
  const courseId = ownProps.params.id; // from course/:id
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  if(courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId)
  }
// Since the authors list comming from api is not appropriate for select dropdown,
// It is converted here.....
// authorsFormattedForDropdown is array of various authors with each element as
// {value: 'blabla', text: 'blabla'}
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  })

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
