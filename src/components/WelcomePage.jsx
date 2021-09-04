import React from 'react'
import Banner from './Banner'
import Jumbotron from './Jumbotron'

function WelcomePage() {
    return (
        <div>
         <Banner/>
         <Jumbotron
          heading="Download your shows to watch offline."
          sub=" Save your favourites easily and always have something to watch. "
          image= "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
         />
         <Jumbotron
         heading= "Enjoy on your TV."
         sub="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
         image="/images/Tv.png"
        reverse="true"/>
         <Jumbotron
         heading="Watch everywhere."
         sub="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
         image="/images/video.png"
         />
         <Jumbotron
         heading="Create profiles for children."
         sub="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        image="https://occ-0-2991-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
        reverse="true"/>
        </div>
    )
}

export default WelcomePage
