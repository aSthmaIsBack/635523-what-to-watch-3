import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: -1
    };
    this.handleHoverFilm = this.handleHoverFilm.bind(this);
  }

  render() {
    const {filmList} = this.props;
    return (
      <div className="catalog__movies-list">
        {filmList.map((item, i) => (
          <MovieCard
            key={`film-${item.title}-${i}`}
            data={item}
            handleHoverFilm={this.handleHoverFilm}
          />
        ))};
      </div>
    );
  }

  handleHoverFilm(id = -1) {
    if (id !== this.state.currentFilm) {
      this.setState({
        currentFilm: id
      });
    }
  }

}

MoviesList.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })).isRequired
};

export default MoviesList;


