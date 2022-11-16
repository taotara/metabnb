import React from 'react'
import './properties.css';
import DesertKing from '../../img/Frame 151.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DesertKing2 from '../../img/Frame 151-1.jpg';
import DesertKing3 from '../../img/Frame 151-2.jpg';
import DesertKing4 from '../../img/Frame 151-3.jpg';
import DesertKing5 from '../../img/Frame 151-4.jpg';
import DesertKing6 from '../../img/Frame 151-5.jpg';
import DesertKing7 from '../../img/Frame 151-6.jpg';
import DesertKing8 from '../../img/Frame 151-7.jpg';




const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#A02279',
  },
  '& .MuiRating-iconHover': {
    color: '#A02279',
  },
});

function Properties() {
  return (
    <div className="propertyCard">
                    <article className="propertyDetails">
                        <div className="propertyImage">
                            <div className="propertyPix"><img src={DesertKing} alt="" /></div>
                            <div className="heart"><a href="/"><FavoriteIcon /></a></div>
                        </div>
                        <div className="details">
                            <div className="detailsRow1">
                                <p className="detailLight">Desert king</p>
                                <p className="detailBold">1MBT per night</p>
                            </div>
                            <div className="detailsRow2">
                                <p className="detailLight">2345km away</p>
                            <p className="detailLight">available for 2weeks stay</p>
                            </div>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                                 className="ratings">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    size="small"
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Box>
                        </div>
                    </article>

                    <article className="propertyDetails">
                        <div className="propertyImage">
                            <div className="propertyPix"><img src={DesertKing2} alt="" /></div>
                            <div className="heart"><a href="/"><FavoriteIcon /></a></div>
                        </div>
                        <div className="details">
                            <div className="detailsRow1">
                                <p className="detailLight">Desert king</p>
                                <p className="detailBold">1MBT per night</p>
                            </div>
                            <div className="detailsRow2">
                                <p className="detailLight">2345km away</p>
                            <p className="detailLight">available for 2weeks stay</p>
                            </div>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                                 className="ratings">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    size="small"
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Box>
                        </div>
                    </article>

                    <article className="propertyDetails">
                        <div className="propertyImage">
                            <div className="propertyPix"><img src={DesertKing3} alt="" /></div>
                            <div className="heart"><a href="/"><FavoriteIcon /></a></div>
                        </div>
                        <div className="details">
                            <div className="detailsRow1">
                                <p className="detailLight">Desert king</p>
                                <p className="detailBold">1MBT per night</p>
                            </div>
                            <div className="detailsRow2">
                                <p className="detailLight">2345km away</p>
                            <p className="detailLight">available for 2weeks stay</p>
                            </div>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                                 className="ratings">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    size="small"
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Box>
                        </div>
                    </article>

                    <article className="propertyDetails">
                        <div className="propertyImage">
                            <div className="propertyPix"><img src={DesertKing4} alt="" /></div>
                            <div className="heart"><a href="/"><FavoriteIcon /></a></div>
                        </div>
                        <div className="details">
                            <div className="detailsRow1">
                                <p className="detailLight">Desert king</p>
                                <p className="detailBold">1MBT per night</p>
                            </div>
                            <div className="detailsRow2">
                                <p className="detailLight">2345km away</p>
                            <p className="detailLight">available for 2weeks stay</p>
                            </div>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                                 className="ratings">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    size="small"
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Box>
                        </div>
                    </article>

                    <article className="propertyDetails">
                        <div className="propertyImage">
                            <div className="propertyPix"><img src={DesertKing5} alt="" /></div>
                            <div className="heart"><a href="/"><FavoriteIcon /></a></div>
                        </div>
                        <div className="details">
                            <div className="detailsRow1">
                                <p className="detailLight">Desert king</p>
                                <p className="detailBold">1MBT per night</p>
                            </div>
                            <div className="detailsRow2">
                                <p className="detailLight">2345km away</p>
                            <p className="detailLight">available for 2weeks stay</p>
                            </div>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                                 className="ratings">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    size="small"
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Box>
                        </div>
                    </article>

                    <article className="propertyDetails">
                        <div className="propertyImage">
                            <div className="propertyPix"><img src={DesertKing6} alt="" /></div>
                            <div className="heart"><a href="/"><FavoriteIcon /></a></div>
                        </div>
                        <div className="details">
                            <div className="detailsRow1">
                                <p className="detailLight">Desert king</p>
                                <p className="detailBold">1MBT per night</p>
                            </div>
                            <div className="detailsRow2">
                                <p className="detailLight">2345km away</p>
                            <p className="detailLight">available for 2weeks stay</p>
                            </div>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                                 className="ratings">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    size="small"
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Box>
                        </div>
                    </article>

                    <article className="propertyDetails">
                        <div className="propertyImage">
                            <div className="propertyPix"><img src={DesertKing7} alt="" /></div>
                            <div className="heart"><a href="/"><FavoriteIcon /></a></div>
                        </div>
                        <div className="details">
                            <div className="detailsRow1">
                                <p className="detailLight">Desert king</p>
                                <p className="detailBold">1MBT per night</p>
                            </div>
                            <div className="detailsRow2">
                                <p className="detailLight">2345km away</p>
                            <p className="detailLight">available for 2weeks stay</p>
                            </div>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                                 className="ratings">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    size="small"
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Box>
                        </div>
                    </article>

                    <article className="propertyDetails">
                        <div className="propertyImage">
                            <div className="propertyPix"><img src={DesertKing8} alt="" /></div>
                            <div className="heart"><a href="/"><FavoriteIcon /></a></div>
                        </div>
                        <div className="details">
                            <div className="detailsRow1">
                                <p className="detailLight">Desert king</p>
                                <p className="detailBold">1MBT per night</p>
                            </div>
                            <div className="detailsRow2">
                                <p className="detailLight">2345km away</p>
                            <p className="detailLight">available for 2weeks stay</p>
                            </div>
                        </div>
                        <div>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                                 className="ratings">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    size="small"
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                />
                            </Box>
                        </div>
                    </article>
    </div>
  )
}

export default Properties