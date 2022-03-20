import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

  const { movie, detalles, series } = props;

  if (series) {
    return (
      <Descriptions title="Serie Info" bordered>
        <Descriptions.Item label="Title">{movie.name}</Descriptions.Item>
        <Descriptions.Item label="Vote Count">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="Vote Average" span={2}>
          {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="Release Date">{movie.first_air_date}</Descriptions.Item>
        <Descriptions.Item label="Episodes">{detalles.number_of_episodes}</Descriptions.Item>
      </Descriptions>
    )
  } else {
    return (
      <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="Vote Count">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="Vote Average" span={2}>
          {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="Release Date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="Run Time">{detalles.runtime} min</Descriptions.Item>
      </Descriptions>
    )
  }
}

export default MovieInfo