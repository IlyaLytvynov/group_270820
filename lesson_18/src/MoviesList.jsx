import React from 'react';
import './MoviesList.scss';

const apiUrl =
  'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/advertisments';

const localAPIUrl = 'http://localhost:8080/advertisments';
export class MoviesList extends React.Component {
  constructor() {
    super();
    this.state = {
      ads: [],
      isError: false,
    };
  }
  componentDidMount() {
    fetch(localAPIUrl)
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          return {
            success: true,
            data: resp.json(),
          };
        } else {
          return {
            success: false,
            data: [],
          };
        }
      })
      .then((result) => {
        if (result.success) {
          return result.data;
        } else {
          this.setState({ isError: true });
          return [];
        }
      })
      .then((ads) => {
        this.setState({ ads: ads });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isError: true });
      });
  }

  sendData() {
    console.log('FORM SUBMITTED');
    fetch(localAPIUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        img: this.state.imgUrl,
        description: this.state.description,
        note: '*1234565',
        productionUrl: this.state.imgUrl,
      }),
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((ad) => {
        const updateAds = [...this.state.ads, ad];
        this.setState({
          ads: updateAds,
          title: '',
          imgUrl: '',
          description: '',
        });
      });
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeImgUrl(e) {
    this.setState({ imgUrl: e.target.value });
  }

  handleChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    console.log(this.state);
    if (this.state.isError === true) {
      return <h2>Error please try again</h2>;
    }
    const listItems = [];

    for (let ad of this.state.ads) {
      listItems.push(
        <li>
          <img src={ad.img} alt='' />
          <h2>{ad.title}</h2>
        </li>
      );
    }
    const titleId = `title`;
    const imgUrlId = `imgUrlId`;
    const descriptionId = `descriptionId`;
    return (
      <div>
        <form
          action=''
          className='ads-form'
          onSubmit={(e) => {
            e.preventDefault();
            this.sendData();
          }}
        >
          <label htmlFor={titleId}>Title</label>
          <input
            value={this.state.title}
            onChange={(e) => this.handleChangeTitle(e)}
            id={titleId}
            type='text'
          />
          <h3>{this.state.title}</h3>
          <label htmlFor={imgUrlId}>ImgUrl</label>
          <input
            value={this.state.imgUrl}
            onChange={(e) => this.handleChangeImgUrl(e)}
            id={imgUrlId}
            type='text'
          />
          {this.state.imgUrl}
          <label htmlFor={descriptionId}>Description</label>
          <input
            value={this.state.description}
            onChange={(e) => this.handleChangeDescription(e)}
            id={descriptionId}
            type='text'
          />
          {this.state.description}
          <button>SEND</button>
        </form>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
