function OneItm({item}) {
    

  return (
    <div className='card'>
      <div className="img">
          <img src={item.url} alt="" />
      </div>
      <div className="right">
          <h1 className='title'>{item.name}</h1>
          <h3 className='cat'>{item.categories}</h3>
          <h3><span className='avg'>Avg. Cost Per Person:</span> {item.costOne}</h3>
          </div> 
          <div className="rating">
              <h2 className='rat'>{item.rating}</h2>
              <h3 className='vot'>{item.votes} - Votes </h3>
              <h3 className='rev'>{item.reviews} - Reviews</h3>
          </div>
           
    </div>
  )
}

export default OneItm