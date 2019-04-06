import React, { Component } from "react";
import icon from "./employment-hdpi.png";
import "./App.css";
import GuideForm from "./components/guide_form";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import _ from "lodash";
import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
      title: "",
      body: "",
      categories: []
    };
    this.pollInterval = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentDidMount() {
    this.loadGuidesFromServer();
    this.loadCategoriesFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadGuidesFromServer, 2000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  onChangeText = e => {
    var newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const { title, body } = this.state;
    if (!title || !body) return;
    console.log("Posting");
    fetch("/api/guides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body })
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success)
          this.setState({ error: res.error.message || res.error });
        else this.setState({ title: "", body: "", error: null });
      });
  }

  handleCategoryCreation(e) {
    e.preventDefault();
    console.log(this.state);
    const { title, body } = this.state;
    // console.log("title is " + title + body);
    if (!title || !body) return;
    fetch("/api/guides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body })
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success)
          this.setState({ error: res.error.message || res.error });
        else this.setState({ title: "", body: "", error: null });
      });
  }

  renderGuides() {
    // console.log(this.state)
    return _.map(this.state.categories, category => {
      var section_data = this.state.data.length != 0 ? this.state.data[0] : {};
      const REDIRECT_URL = `${category.name}`;

      return (
        <Link to={{ pathname: REDIRECT_URL, state: { data: section_data } }} style={{ color:"black", textDecoration: 'none' }}>
          <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={icon} />
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              <Card.Text>
                 This is a wider card with supporting text below as a natural lead-in to
                 additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Link>
          // <ListGroup.Item key={category.name}>
          //   {/* <Link to={`/posts/${post.id}`}> */}
          //   <img
          //     alt=""
          //     src={icon}
          //     width="40"
          //     height="40"
          //     className="d-inline-block align-top"
          //   />
          //   <p>{category.name}</p>
          // </ListGroup.Item>
      );
    });
  }

  render() {
    var section_data = this.state.data.length != 0 ? this.state.data[0] : {};
    console.log("PARENT LEVEL===");
    console.log(this.state.data);
    console.log(this.state.data[0]);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">RAMP: Reproductive Justice Action League at Yale</h1>
        </header>
        <p className="App-intro">
          Something about what RALY does and why they do it. 
        </p>
        <p>{this.state.error}</p>

      </div>
    );
  }

  loadGuidesFromServer = () => {
    fetch("/api/guides/")
      .then(data => data.json())
      .then(res => {
        // TODO for some reason success field is not being returned
        // if (!res.success) this.setState({ error: res.error });
        // else this.setState({ data: res });
        this.setState({ data: res });
      });
  };

  loadCategoriesFromServer = () => {
    fetch("/api/categories/")
      .then(data => data.json())
      .then(res => {
        // TODO for some reason success field is not being returned
        // if (!res.success) this.setState({ error: res.error });
        // else this.setState({ data: res });
        this.setState({ categories: res.categories });
      });
  };
}

const styles = {
  textDecoration: "none"
};

export default App;
