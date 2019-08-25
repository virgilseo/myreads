import React,{Component} from 'react';


class BackToTop extends Component {

  render() {

    return(
      <div>
        <i className='material-icons back-btn' onClick={() => {this.props.scroll()}}>arrow_upward</i>
      </div>
    )
  }
}

export default BackToTop
