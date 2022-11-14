import React, { Component, useRef } from "react";
import Header from "../Header";
import Intro from "../pageContent/Intro";
import Portfolio from "../pageContent/Portfolio";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  //  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  //  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
  //  resetFeedbackForm: () => {
  //    dispatch(actions.reset("feedback"));
  //  },
  //  fetchLeaders: () => {
  //      dispatch(fetchLeaders());
  //    },
});

class Main extends Component {
  componentDidMount() {
    //this.props.fetchDishes();
  }
  

  render() {

    
    return (
      <>
        <Header />
        <Intro />
        <Portfolio />
      </>
    );
  }
}

export default Main;
