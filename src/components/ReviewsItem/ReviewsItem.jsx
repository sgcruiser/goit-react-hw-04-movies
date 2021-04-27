const ReviewsItem = ({ author, text, date, img }) => {
  const imageUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : null;
  return (
    <>
      <img src={imageUrl} alt={author} width="100" />
      <h2>{author}</h2>
      <p>{text}</p>
      <div>{date}</div>
    </>
  );
};

export default ReviewsItem;
