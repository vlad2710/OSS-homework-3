import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageComponent from "../ImageComponent";
import './GalleryComponent.css'

export default class GalleryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.fetchApi = () => {
      fetch("https://picsum.photos/v2/list?page=3&limit=10")
        .then((response) => {
          return response.json();
        })
        .then((result) => {
            console.log(result)
          this.setState({
            data: result,
          });
        });
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    return (
      <div>
        <Carousel>
            {this.state.data.map( (item) =>{
                return <ImageComponent url={item.download_url} author={item.author}/>
            } )}
        </Carousel>
      </div>
    );
  }
}
