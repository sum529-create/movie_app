import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // home으로 되돌리기
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    // props ? -> Detail.js이게 App.js Route 컴포넌트에 있기때문에 사용가능
    const { location } = this.props;
    if (location.state) {
      const { title, year, genres } = location.state;
      return (
        <>
          <span>title: {title} </span>
          <span>year: {year} </span>
          <span>genres: {genres}</span>
        </>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
