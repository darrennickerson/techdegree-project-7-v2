import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import NoRoute from "./components/NoRoute";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import { cats, dogs, computers } from "./components/StaticNav";
import apiKey from "./config";

class App extends React.Component {
  // Declaring State
  state = {
    photos: [],
    isLoading: true,
    title: "",
  };

  //When app loads, call default search
  componentDidMount() {
    this.searchQuery();
  }

  // Handle all Seaches
  searchQuery = (query = "cats") => {
    this.setState({ isLoading: true });
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.photos.search",
        {
          params: {
            api_key: apiKey,
            tags: query,
            format: "json",
            nojsoncallback: 1,
            per_page: 24,
            page: 1,
            extras: "url_c",
          },
        }
      )

      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          isLoading: false,
          title: query,
        });
      })
      .catch((error) => {
        console.log("there was an error " + error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.searchQuery} />
          {/* Check isLoading State and display spinner if true */}
          {this.state.isLoading ? (
            <img src="loading.gif" alt="loading" />
          ) : (
            <Switch>
              <Route exact path="/">
                <Redirect to="/cats" />
              </Route>
              <Route
                exact
                path="/search/:term"
                render={() => (
                  <PhotoContainer
                    photos={this.state.photos}
                    title={this.state.title}
                  />
                )}
              />
              <Route
                path="/cats"
                render={() => <PhotoContainer photos={cats} title="Cats" />}
              />
              <Route
                path="/dogs"
                render={() => <PhotoContainer photos={dogs} title="Dogs" />}
              />
              <Route
                path="/computers"
                render={() => (
                  <PhotoContainer photos={computers} title="Computers" />
                )}
              />
              <Route render={() => <NoRoute />} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
