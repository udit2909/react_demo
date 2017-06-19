import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    //
    // this.state = {
    //   course: {
    //     title: ''
    //   }
    // };
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event){
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }
  //
  // onClickSave(){
  //   // Dispatch comes from the connect which passes it as props to component
  //   this.props.dispatch(courseActions.createCourse(this.state.course));
  //   // this.props.actions.createCourse(this.state.course);
  //   // When action is dispatched, all the reducers are called.
  // }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render() {
    return (
      <div>
        <h1>
          Courses
        </h1>
        <input type="submit" value="Add Course" className="btn btn-primary"
        onClick={this.redirectToAddCoursePage}></input>
        <CourseList courses = {this.props.courses}/>
        {/* <h2>Add Course</h2>
          <input type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}>
          </input>
          <input type="submit"
          value="Save"
          onClick={this.onClickSave}>
        </input> */}
      </div>
    );
  }
}

// This state.courses comes from the root reducer

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

// find all the actions in courseActions file and wrap them in dispatch
// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(courseActions, dispatch);
//   }
// }

// connect takes two functions mapStateToProps and mapDispatchToProps in which
// mapStateToProps tells what states from store are required to be passed as props
// mapDispatchToProps tells what actions from store are required to be passed as props
// to the component

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);


export default connect(mapStateToProps)(CoursesPage);
