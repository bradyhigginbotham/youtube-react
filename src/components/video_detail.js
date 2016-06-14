import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const embedUrl = `http://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="col-md-8 video-detail ">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={embedUrl} className="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div className="title">{video.snippet.title}</div>
				<div className="description">{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;