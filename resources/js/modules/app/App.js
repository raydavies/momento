import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div id="content_wrapper">
        <div id="head_wrapper">
          <div id="header">
            <header id="title">
              <h1>Spring Break with Meg & Fonda</h1>
            </header>
            <nav>
              <ul></ul>
            </nav>
          </div>
        </div>
        <div id="polaroid_wrapper">
          <section id="polaroid"></section>
          <a href="admin/">
            <span id="greeting">Wish You Were Here!</span>
          </a>
        </div>
        <div id="frame_left" className="frame">
          <section>
            <header id="itinerary">
              <h1>Itinerary</h1>
            </header>
          </section>
        </div>
        <div id="frame_right" className="frame">
          <div id="chalkboard">
            <section>
              <header id="blog">
                <h1>
                  <a id="bloglink" href="blog.php">
                    Blog
                  </a>
                </h1>
              </header>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
