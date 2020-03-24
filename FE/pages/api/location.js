import { getAllLocations } from '../../lib/crud.js'

export default (req, res) => {
  const locations = getAllLocations()
  res.status(200).json({locations})
  // res.status(200).json({
  //   quote: 'Write tests, not too many, mostly integration',
  //   author: 'Guillermo Rauch'
  // });
};
