import { getAllLocations } from '../../lib/crud.js'

export default async (req, res) => {
  const locations = await getAllLocations()
  console.log('loc',locations)
  res.status(200).json({locations})
  // res.status(200).json({
  //   quote: 'Write tests, not too many, mostly integration',
  //   author: 'Guillermo Rauch'
  // });
};
