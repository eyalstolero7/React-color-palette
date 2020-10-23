import React, { Component } from "react";

class Page extends Component {
  render() {
  const { pageClass } = this.props;
    return (
      <section className={`page ${pageClass}`}>
        {this.props.children}
      </section>
    );
  }
}

export default Page;
